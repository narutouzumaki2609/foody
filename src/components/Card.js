import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="card mt-3" style={{width: "18rem", maxHeight:"380px"}}>
                <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.Foodname}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success'>  
                            {Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>  
                            
                            
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                            
                        </select>
                        <div className='d-inline h-100 fs-5'>Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
