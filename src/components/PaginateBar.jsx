import React from 'react'

const PaginateBar = ({ currentpage, setcurrentpage, moviesPerPage, filtered }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filtered.length / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <div className="pagination-container">
            <div className="pagination">
                <button className="page-number" onClick={() => { currentpage > 1 ? setcurrentpage(currentpage - 1) : '' , window.scroll({top: 0,left: 0,behavior: 'smooth'})}}>{'<'}</button>
                {pageNumbers.map((number, index) => (
                    <button key={index} className="page-number" style={{backgroundColor:currentpage==number?"rgb(87, 56, 175)":'white',Color:currentpage==number?"white":'black'}} onClick={() => {setcurrentpage(number),window.scroll({top: 0,left: 0,behavior: 'smooth'})}} >
                        {number}
                    </button>
                ))}
                {/* <button  className="page-number" onClick={()=>setcurrentpage(currentpage-1)} >
                  {currentpage-1}
               </button>
             <button  className="page-number" onClick={()=>setcurrentpage(number)} >
                  {currentpage}
               </button>
               <button  className="page-number" onClick={()=>setcurrentpage(currentpage+1)} >
                  {currentpage+1}
               </button> */}
                <button className="page-number" onClick={() => { currentpage < pageNumbers.length ? setcurrentpage(currentpage + 1) : '' ,window.scroll({top: 0,left: 0,behavior: 'smooth'})}}>{'>'}</button>
            </div>
        </div>

    )
}

export default PaginateBar
