/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';
import isEmpty from "is-empty";
import isEmail from "validator/lib/isEmail";
import Logo from "@/components/Logo";
import Input from "@/components/Input";
import Button from "@/components/Button";
import apiFactory from "@/helper/apiFactory";
import StringConstant from "@/constants";

function Sign() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['jwtToken']);

  const [type, setType] = useState(true); // type = false -> sign in page, true -> sign up
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSignUp = () => {
    if (!isEmail(email)) {
      return toast.warning(StringConstant.INVALID_EMAIL);
    }
    if (isEmpty(password) || isEmpty(email)) {
      return toast.warning(StringConstant.EMPTY_DATA);
    }
    apiFactory.signUp({
      email,
      password,
    }).then(_ => {
      toast.success(StringConstant.SING_UP_SUCCESS);
      setType(true);
    }).catch(error => {
      toast.error(StringConstant.SIGN_UP_FAILED);
      console.error(error);
    });
  }

  const onSignIn = () => {
    if (isEmpty(password) || isEmpty(email)) {
      return toast.warning(StringConstant.EMPTY_DATA);
    }
    apiFactory.signIn({
      email,
      password,
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      toast.success(StringConstant.WELCOME);
      router.push("/job/hire");
    }).catch(error => toast.error(apiFactory.getError(error, null)));
  }

  useEffect(() => {
    if (!isEmpty(cookies.jwtToken) || !isEmpty(localStorage.getItem("token"))) {
      let token = cookies.jwtToken;
      if (isEmpty(token)) {
        token = localStorage.getItem("token");
      }
      apiFactory.test(token)
        .then(() => {
          localStorage.setItem("token", cookies.jwtToken);
          setCookie("jwtToken", null);
          router.push("/job/hire");
        })
        .catch(() => {
          setCookie("jwtToken", null);
          console.log("token remove");
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <div className="w-full h-[100vh] bg-slate-200 justify-center items-center inline-flex">
      <div className="w-[721px] h-[557px]">
        <div className="w-[721px] h-[557px] self-center grow shrink basis-0 p-6 bg-white rounded-2xl shadow justify-center items-center gap-6 inline-flex">
          <Image
            className="self-stretch rounded-lg"
            width={246}
            height={509}
            src={`/images/unsplash_${type ? "pVt9j3iWtPM" : "HoEYgBL_Gcs"}.png`}
            alt="Sign image"
          />
          <div className="grow shrink basis-0 self-stretch pt-6 flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[258px] h-7 justify-center items-center inline-flex">
              <Logo />
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <div className="text-sky-700 text-base font-semibold">{type ? "Welcome to back" : "Create an account"}</div>
              <div className="text-zinc-400 text-[10px]">{type ? "Sign in to continue" : "Create a new account"}</div>
            </div>
            <div className="self-stretch h-[136px] flex-col justify-start items-center gap-[18px] flex">
              <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
                <div className="text-neutral-600 text-sm">Email Address</div>
                <Input type="search" onChange={(value) => setEmail(value)} value={email} />
              </div>
              <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
                <div className="text-neutral-600 text-sm">User Password</div>
                <Input type="password" onChange={(value) => setPassword(value)} value={password} />
              </div>
            </div>
            <Button text={type ? "Login" : "Sign Up"} color="primary" onClick={type ? onSignIn : onSignUp} />
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
              <div className="text-zinc-400 text-sm">or</div>
              <div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
              <a href={`${process.env.SERVER_IP}/google`} className="bg-white hover:shadow hover:cursor-pointer w-[100%] h-8 px-6 py-2 rounded-lg justify-center items-center gap-2.5 transition-all inline-flex border border-gray-300">
                <Image
                  width={20}
                  height={20}
                  alt="Button Image"
                  src="/icons/google-icon.svg"
                />
                <div className="text-indigo-900 text-sm capitalize" >Google</div>
              </a>
              <Button icon="/icons/facebook.svg" text="Facebook" variant="outlined" color="primary" />
            </div>
            <div className="justify-center items-start gap-1 inline-flex">
              <div className="text-neutral-600 text-sm">{type ? "Don’t have an account?" : "Already have an account?"}</div>
              <div className="justify-center items-center gap-2.5 flex">
                <Link className="text-blue-500 text-sm font-medium underline" href="/" onClick={() => setType(!type)}>{type ? "Sign up" : "Log in"}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;