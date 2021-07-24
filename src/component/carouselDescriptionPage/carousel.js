import React, { Fragment, useState} from 'react';
import classes from './carousel.module.css';
import { Container } from 'react-bootstrap';


const Carousel = (props)=>{
    // console.log('CAROUSAL',props)
    const arr = [props.front,props.back,props.main,props.top,props.bottom];
    const [active,updateActive] = useState(2);
    // const styles = [
    //     {position:'absolute',left:'calc(50% - 150px)',opacity:'1',level:'1',height:'300px',width:'300px',transition:'width 1s,height 1s,opacity 1s,top 1s,left 1s',zIndex:'10',boxShadow: '-10px 15px 46px #0d2436',backgroundColor:'#0d2436'},
    //     {position:'absolute',left:'calc(50% - 300px)',opacity:'0.5',level:'2',height:'200px',width:'200px',transition:'width 1s,height 1s,opacity 1s,top 1s,left 1s',zIndex:'5',boxShadow: '-10px 15px 46px #0d2436',backgroundColor:'#0d2436'},
    //     {position:'absolute',left:'calc(50% + 100px)',opacity:'0.5',level:'3',height:'200px',width:'200px',transition:'width 1s,height 1s,opacity 1s,top 1s,left 1s',zIndex:'5',boxShadow: '-10px 15px 46px #0d2436',backgroundColor:'#0d2436'},
    //     {position:'absolute',left:'43%',opacity:'0',level:'4',height:'0',width:'0',transition:'width 1s,height 1s,opacity 1s,top 1s,left 1s',zIndex:'5',boxShadow: '-10px 15px 46px #0d2436',backgroundColor:'#0d2436'}
    // ]
    return(
        <Fragment>
            <div className={classes.Slides}>
                <ul className={classes.Ul}>
                    {
                        arr.length>0?arr.map((items,key)=>
                            <li 
                                // style={active===key?styles[0]:active-1<0&&4===key?styles[1]:active+1>4&&0===key?styles[2]:active-1===key?styles[1]:active+1===key?styles[2]:styles[3]}
                                className={active===key?classes.Active:active-1<0&&4===key?classes.PreActive1:active+1>4&&0===key?classes.PreActive2:active-1===key?classes.PreActive1:active+1===key?classes.PreActive2:classes.NotActive} 
                                key={key} 
                                onClick={()=>updateActive(key)}>
                                   
                                <img src={items} alt={`${key}`} className={classes.Img}/>
                            </li>
                        ):null
                    }
                    <Container className={classes.Center}> 
                    <button className={classes.ButtonLeft} onClick={()=>{active-1>=0?updateActive(active-1):updateActive(4)}}>
                        <i className="fas fa-chevron-left fa-lg" style={{padding:'3%'}}></i>
                    </button>
                    <button className={classes.ButtonRight} onClick={()=>{active+1<=4?updateActive(active+1):updateActive(0)}}>
                        <i className="fas fa-chevron-right fa-lg" style={{padding:'3%'}}></i>
                    </button>
                    </Container>
                </ul>
            </div>
        </Fragment>
    )
}
export default Carousel;