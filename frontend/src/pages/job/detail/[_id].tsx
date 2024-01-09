/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Suspense } from 'react'
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import isEmpty from "is-empty";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import Header from "@/components/Header";
import BreadCrumbItem from "@/components/BreadCrumbItem";
import ItemForm from "@/components/ItemForm";
import Button from "@/components/Button";
import StringConstant from "@/constants";
import apiFactory from "@/helper/apiFactory";

function Detail() {
    const router = useRouter();
    const { _id } = router.query;
    const [data, setData] = useState<{ [key: string]: any }>({});

    const updateJob = () => {
        if (!StringConstant.JOB_VARIABLE_NAMES.every(name => {
            if (isEmpty(data[name])) {
                return false;
            }
            return true;
        })) {
            return toast.warning(StringConstant.EMPTY_DATA);
        }
        apiFactory.updateJob(_id, data, localStorage.getItem("token"))
            .then(_ => {
                toast.success(StringConstant.UPDATE_SUCCESS)
            }).catch(error => toast.error(apiFactory.getError(error, router)));
    }

    const deleteJob = () => {
        apiFactory.deleteJob(_id, localStorage.getItem("token"))
            .then(_ => {
                toast.success(StringConstant.DELETE_SUCCESS);
                router.push("/job/hire");
            }).catch(error => toast.error(apiFactory.getError(error, router)));
    }

    useEffect(() => {
        if (!isEmpty(_id)) {
            if (isEmpty(localStorage.getItem("token"))) {
                router.push("/");
            } else {
                apiFactory.readJob(_id, localStorage.getItem("token"))
                    .then(res => {
                        setData(res.data.data);
                    }).catch(error => toast.error(apiFactory.getError(error, router)));
            }
        }
    }, [_id]);
    return (
        <>
            <Suspense fallback={<div>Hello</div>}>
                <Header />
                <div className="w-full h-full justify-center items-center flex-col">
                    <img src="/images/unsplash_YwPNWDNZHkg.png" alt="Header Background Image" className="w-full absolute -z-[1] h-[184px] opacity-70" />
                    <div className="w-full h-full justify-center items-center py-8 mx-auto">
                        <Header2 />
                    </div>
                </div>
                <div className="w-full h-full py-8 flex-col justify-start items-center gap-8 inline-flex">
                    <div className="px-[10%] self-stretch h-full rounded-2xl flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch p-4 bg-white rounded-2xl justify-start items-start inline-flex">
                            <BreadCrumbItem text="Home" icon />
                            <BreadCrumbItem text="Hire" />
                            <BreadCrumbItem text="My Jobs" onClick={() => router.push("/job/hire")} />
                            <BreadCrumbItem text="Post New Job" selected />
                        </div>
                        <div className="px-[10%] self-stretch h-full p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 flex">
                            <div className="self-stretch h-full p-6 rounded-lg border border-black border-opacity-10 flex-col justify-center items-center gap-3 flex">
                                {StringConstant.JOB_VARIABLE_NAMES.map((name, index) => <ItemForm onChange={value => { data[name] = value; setData({ ...data }); }} key={index} value={data[name]} required={!StringConstant.JOB_INFO_NAMES[index].endsWith("?")} subject={StringConstant.JOB_INFO_NAMES[index]} type={StringConstant.JOB_INFO_NAMES[index].endsWith("?") ? "boolean" : (StringConstant.JOB_INFO_NAMES[index].endsWith("Description") ? "textarea" : "input")} />)}
                                <div className="h-8 w-full flex-row float-right justify-start items-end gap-2.5 inline-flex">
                                    <div className="h-8 w-full float-left flex-col justify-end items-start gap-2.5 inline-flex">
                                        <Button text="Delete" width="auto" icon="/icons/iconoir_delete.svg" color="secondary" onClick={deleteJob} />
                                    </div>
                                    <div className="h-8 w-full float-right flex-col justify-start items-end gap-2.5 inline-flex">
                                        <Button text="Update" width="auto" icon="/icons/iconoir_check.svg" color="primary" onClick={updateJob} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 w-full">
                        <Footer />
                    </div>
                </div>
            </Suspense>
        </>
    );
}

export default Detail;