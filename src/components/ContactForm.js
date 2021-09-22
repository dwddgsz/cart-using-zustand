import React,{useState} from 'react'
import styled from 'styled-components';


const ContactFormWrapper = styled.form`
    display:flex;
    flex-direction: column;
    .form-group {
        display:flex;
        flex-direction: column;
        margin-bottom:20px;
        label {
            margin-bottom:5px;
            font-size:1.3rem;
            font-weight:500;
        }
        input,textarea {
            width:280px;
            max-width: 280px;
            height:40px;
            padding-left:7px;
            border:none;
            border-radius:5px;
            outline:none;
            box-shadow: 1px 6px 10px rgba(0,0,0,.2);
            font-size:1.15rem;
            @media only screen and (min-width:992px) {
                width:340px;
                max-width: 340px;
            }
            @media only screen and (min-width:1280px) {
                width:370px;
                max-width: 370px;
            }
        }
        textarea {
            max-height:100px;
        }
    }
    .dropdown {
        position:relative;
        &__result{
            position:relative;
        }
        &__arrow {
            position:absolute;
            top:50%;
            right:10px;
            transform: translateY(-50%);
            height:15px;
            width:15px;
            cursor:pointer;
            &::before,
            &::after {
                content:'';
                position:absolute;
                top:50%;
                width:9.2px;
                height:2px;
                background-color: var(--dark);
                border-radius:5px;
            }
            &::before {
                left:0;
                transform: rotate(45deg);
            }
            &::after {
                right:0;
                transform: rotate(-45deg);
            }
        }
        &__options.hide-dropdown {
            display:none;
        }
        &__options {
            position:absolute;
            top:100%;
            left:0;
            display:flex;
            flex-direction:column;
            width:280px;
            border-radius:5px;
            box-shadow: 1px 6px 10px rgba(0,0,0,.2);
            overflow: hidden;
            cursor:pointer;
            @media only screen and (min-width:992px) {
                width:340px;
                max-width: 340px;
            }
            @media only screen and (min-width:1280px) {
                width:370px;
                max-width: 370px;
            }
            span {
                display:flex;
                align-items:center;
                height:40px;
                width:100%;
                padding-left:7px;
                font-size:1.2rem;
                background-color: var(--light);
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
    }
    button {
            height:40px;
            line-height: 40px;
            border-radius:4px;
            font-weight: 500;
            background-color: var(--dark);
            color: var(--light);
            cursor:pointer;
        }
`

const ContactForm = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <ContactFormWrapper>
            <div className="form-group">
            <label>Subject</label>
            <div className="dropdown">
                <div className="dropdown__result" onClick={()=>{setIsDropdownOpen(previous=>!previous)}}>
                    <input type="text" defaultValue={selectedOption}/> 
                    <span className="dropdown__arrow"></span>
                </div>
                <div className={`dropdown__options ${isDropdownOpen ? '' : 'hide-dropdown'}`} 
                onClick={(e)=>{
                    setIsDropdownOpen(previous=>!previous);
                    setSelectedOption(e.target.closest('span').innerText);
                    }}>
                    <span>Problem using website</span>
                    <span>Improvement ideas</span>
                    <span>Other</span>
                </div>
            </div>
            </div>

            <div className="form-group">
            <label>Email</label>
            <input type="email"/>
            </div>

            <div className="form-group">
            <label>Wiadomość</label>
            <textarea/>
            </div>
            <button type="submit">Send</button>
        </ContactFormWrapper>
    )
}

export default ContactForm;