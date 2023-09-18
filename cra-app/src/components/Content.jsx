import React, { useState, useEffect } from "react";

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [studentList, setStudentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [action, setAction] = useState('next');

    useEffect(() => {
        setLoading(true);
        async function getList() {
            let response = await fetch(`https://js-post-api.herokuapp.com/api/students?_page=${currentPage}`)
            let json = await response.json();
            setStudentList(json.data);
            setTotalPage(Math.ceil(json.pagination._totalRows) / Number(json.pagination._limit));
            let arrpage = [];
            for (let i = 1; i <= totalPage; i++) {
                arrpage.push(i);
            }
            setPages(arrpage);
            setLoading(false);

        }
        getList();
    }, [currentPage])

    const handleClickPagination = (page) => {
        setCurrentPage(page);
    }

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
            setAction('next')
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setAction('prev')
        }
    }

    return (
        <div className="">
            <div className="bg-info bg-gradient text-white fw-bolder  ">
                <h1 className="p-3 mb-2 ms-2" >Student List</h1>
            </div>

            <div className="row">
                <nav className="navigation">
                    <ul className="pagination">
                        <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} `}>
                            <a role="button " className="page-link" onClick={handlePreviousPage}> Previous </a>
                        </li>
                        {
                            pages.map((page, index) => (
                                <li className="page-item" key={index}>
                                    <a className={currentPage == page ? "page-link btn btn-primary active" : "page-link btn btn-primary"}
                                        role="button" onClick={() => handleClickPagination(page)}
                                    > {page}</a>
                                </li>
                            ))
                        }

                        <li className={`${currentPage >= totalPage ? 'page-item disabled' : 'page-item'}`}>
                            <a role="button " className="page-link" onClick={handleNextPage}> Next </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {

                loading ? <p className="text-danger">Loading...</p> : (
                    <div className="row">

                        {
                            studentList.map((student) => (
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <img src={student.gender == "male" ? "https://i.pinimg.com/564x/6b/b5/e0/6bb5e0847393f6dde71daf46bb14d18a.jpg" : "https://i.pinimg.com/564x/35/b9/a0/35b9a05cb78e39750a8d77cc67ceca23.jpg"} className="avatar-md" />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{student.name}</h5>
                                                    <p className="card-text">Tuổi: {student.age}</p>
                                                    <p className="card-text">Điểm: {student.mark}</p>
                                                    <p className="card-text">Giới tính: {student.gender}</p>
                                                    <p className="card-text">Địa chỉ: {student.city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Content;