import {connect} from "react-redux"

function Layout({children}){
    return(
        <div className="bg-black text-white min-h-screen">
                  {children}
        </div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,

)(Layout)