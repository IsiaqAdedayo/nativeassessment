import axios from 'axios';
import React, {useEffect, useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import styles from '../styles/createAdmin.module.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import Spinner from 'react-bootstrap/Spinner'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { connect } from 'react-redux';
import {mainUser, userToken} from '../redux/user/userActions'
import {useRouter} from 'next/router'


const DataTable = ({mainUser, userToken, userTokenData}) => {
    const [userList , setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();

    
    const selectDiv = (cell, row) => {
       
        return(
            <div>
                <select onChange={onOpenModal} className={styles.field}  name="more">
                    <option value="" >More</option>
                    <option value="manage">Manage</option>
                    <option value="inactive">Make Inactive</option>
                    <option value="active">Active</option>
                </select>
            </div>
        )
    }

    const statusButton = userTokenData && userTokenData.status && (userTokenData.status == "active") ?  "btn disabled btn-success" : userTokenData && userTokenData.status && (userTokenData.status == "inactive") ? "btn disabled btn-danger" : "btn disabled btn-success";
    // let handleProceed
    const handleProceed = (e) => {
        if(e.target.value == "inactive"){
            if(userTokenData && userTokenData.status && (userTokenData.status == "active")){
               userTokenData && userTokenData.status && (userTokenData.status === "active") ? userTokenData.status === "inactive" : null;
            }
       }
    }

    const statusDiv = (cell, row) => {
        
        return(
            <>
                <button className={statusButton}>
                    Active
                </button>
            </>
        )
    }

    const imgDiv = (cell, row) => {
        return (<img style={{borderRadius:"50%"}} src={cell}/>);
    }

    const nameDiv = (cell) => {
        return <div style={{cursor:"pointer"}}> {cell} </div>
    }

    const columns = [
        {dataField: "picture.thumbnail" , text: "" ,formatter: imgDiv, sort:true,},
        {dataField: 'name.first',
         text: "Name",
         sort:true,
         formatter:nameDiv,
         events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
                mainUser(row);
                router.push('/singleAdmin')
                },
            }
        },
        {dataField: 'login.username', text: "Username", sort:true},
        {dataField: 'email', text: "Email", sort:true},
        {dataField: "status" , text: "Status" ,formatter: statusDiv, sort:true,
            
        },
        {dataField: "more" , text: "More" ,formatter: selectDiv, sort:true,
            events: {
                onChange:(e, column, columnIndex, row, rowIndex) => {
                    userToken(column)
                    // if(e.target.value == "inactive"){
                    //      const handleProceed = () => {
                    //         userTokenData && userTokenData.status && (userTokenData.status === "active") ? userTokenData.status === "inactive" : null;
                    //     }
                    // }else{
                    //     // setColor("btn disabled btn-success")
                    // }
                    // console.log(e.target.value)
                }
            }
        },
    ]


    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: (page, sizePerPage) => {
            console.log("page", page);
            console.log("sizePerPage", sizePerPage);
        },
        onSizePerPageChange: (page, sizePerPage) => {
            console.log('page', page)
            console.log("sizePerPage", sizePerPage);
        }
    })

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=30")
        .then(res => setUserList(res.data.results), setLoading(true))
        
        .catch(err => console.log(err));

    },[])

    // console.log(userList)

    const [open, setOpen] = useState(false);

    const onCloseModal = () => setOpen(false);
    const onOpenModal = () => setOpen(true);
    return (
        <div>
            {/* <input  value={e => setSearchVal(e.target.value)}/> */}
            <div onClick={() => router.push('/createAdmin')} className="btn" style={{border: "3px solid #f17d11", marginLeft: "88%", marginBottom: "-35px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg> New</div>
            {
                loading ? 
                    <BootstrapTable 
                    bootstrap4 
                    caption="ALL ADMIN"
                    keyField="login.uuid" 
                    columns={columns} 
                    data={userList} 
                    striped={true}
                    pagination={pagination}
                />
                : <Spinner animation="border" />
            }
            <Modal open={open} onClose={onCloseModal} >
                <div className="" style={{borderBottom:"1px solid black"}}>
                    <h5 className="">Confrim your action</h5>
                </div>
                <div className="p-5 d-flex flex-column justify-content-center" style={{borderBottom:"1px solid black"}}>
                    <h5>Are you sure you want to disable</h5>
                    <h3 className="text-danger ml-5" style={{marginLeft: "60px"}}>Bosun Jones</h3>
                </div>
                <div className="d-flex justify-content-around mt-4">
                    <button onClick={handleProceed} className="btn btn-outline-danger">Proceed</button>
                    <button className="btn btn-outline-success" onClick={onCloseModal}>Cancel</button>
                </div>
            </Modal>

        </div>
    )
}


const mapStateToProps = ({ user }) => {
    return{
        userData: user.mainUser,
        userTokenData: user.userToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mainUser: (row) => dispatch(mainUser(row)),
        userToken: (row) => dispatch(userToken(row)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataTable)
