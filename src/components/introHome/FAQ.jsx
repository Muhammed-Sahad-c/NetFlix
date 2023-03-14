import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import 'bootstrap/dist/css/bootstrap.min.css';
function FAQ({faqArray}) {
    const [open, setOpen] = useState(false);
    return (
        <div className='faqOuterFrame '>
            <div className="container px-5">
                <div className='px-5  ' style={{background:'rgb(45 45 45) !important'}}>
                    <Button className='collapsebutton'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <h3>{faqArray.qustion}</h3>
                        <h3 className='plusButton'>+</h3>
                    </Button>
                    <Collapse in={open} >
                        <div id="example-collapse-text text-center">
                           {
                            faqArray.answer
                           }
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default FAQ