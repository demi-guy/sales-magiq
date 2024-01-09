/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Book } from "iconoir-react";
import isEmpty from "is-empty";
import BreadCrumbItem from "@/components/BreadCrumbItem";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Input from "@/components/Input";
import Select from "@/components/Select";
import ItemJob from "@/components/ItemJob";
import Pagination from "@/components/Pagination";
import apiFactory from "@/helper/apiFactory";

function Hire() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (isEmpty(localStorage.getItem("token"))) {
            router.push("/");
        } else {
            apiFactory.readJobs(localStorage.getItem("token"), page, search, selected)
                .then(res => {
                    setData(res.data.data);
                }).catch(error => toast.error(apiFactory.getError(error, router)));
        }
    }, [search, page, selected]);

    return (
        <>
            <Header />
            <div className="w-full h-full justify-center items-center flex-col">
                <img src="/images/unsplash_HoEYgBL_Gcs2.png" alt="Header Background Image" className="w-full absolute -z-[1] h-[184px] opacity-70" />
                <div className="w-full h-full justify-center items-center py-8 mx-auto">
                    <Header2 />
                </div>
            </div>
            <div className="w-full h-full py-8 flex-col justify-start items-center gap-8 inline-flex">
                <div className="px-[10%]  self-stretch h-full rounded-2xl flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch p-4 bg-white rounded-2xl justify-start items-start inline-flex">
                        <BreadCrumbItem text="Home" icon />
                        <BreadCrumbItem text="Hire" />
                        <BreadCrumbItem text="My Jobs" selected />
                    </div>
                    <div className="w-full h-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
                        <div className="self-stretch justify-start items-center gap-3 inline-flex">
                            <div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
                                <div className="w-4 h-[18px] relative">
                                    <Book />
                                </div>
                            </div>
                            <div className="text-neutral-600 text-base font-normal font-['Rubik']">My All Jobs</div>
                            <div />
                            <div className="grow shrink basis-0 h-8 justify-end items-start gap-2.5 flex">
                                <Input type="search" placeholder="Search" width="[141px]" value={search} onChange={(value) => setSearch(value)} />
                                <Select icon src="/icons/iconoir_filter.svg" placeholder="Filter" setResult={(value) => setSelected(value)} />
                                <Button onClick={() => router.push("/job/post")} icon="/icons/iconoir_page-edit.svg" color="primary" width="[168px]" text="Post New Job" />
                            </div>
                        </div>
                        <div className="self-stretch h-full flex-col justify-start items-start flex">
                            {data.slice(page * 10, page * 10 + 10).map((item: {
                                _id: string,
                                salaryAmount: string,
                                title: string,
                                jobDescription: string,
                            }, index) => <ItemJob key={index} onClick={() => router.push(`/job/detail/${item._id}`)} price={item.salaryAmount} title={item.title} description={item.jobDescription} />)}
                        </div>
                        <Pagination totalCount={data.length} page={page} onPage={page => setPage(page)} />
                    </div>
                </div>
                <div className="px-8 w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Hire;