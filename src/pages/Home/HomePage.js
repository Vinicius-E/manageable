import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    const navigate = useNavigate()
    
    const goToMonthlyStatement = () => {
        return navigate("/monthlyStatement")
    }

    return (
        <body className="homeContent"> 
            <div className="homeGrid"> 
                <div className="homeGridOption" onClick={goToMonthlyStatement}>
                    MONTHLY STATEMENT
                </div>            
                <div className="homeGridOption">
                    MANAGEABLE CONTENT 2
                </div>            
                <div className="homeGridOption">
                    MANAGEABLE CONTENT 3
                </div>            
                <div className="homeGridOption">
                    MANAGEABLE CONTENT 4
                </div>                            
            </div> 
        </body>
    )
}

export default HomePage