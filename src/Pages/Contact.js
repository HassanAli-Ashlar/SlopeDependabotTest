import { useEffect, useState, useRef } from 'react';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import $ from 'jquery';
import OverlayScrollbars from 'overlayscrollbars';
import ContactHeader from '../components/Headers/ContactHeader.js';

function Contact() {
    const [activeForm, setActiveForm] = useState('form1');

    const handleFormClick = (formName) => {
        setActiveForm(formName);
        console.log(formName);
    };

    //for strategySessionForm
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [projectType, setProjectType] = useState('');
    const [foundThrough, setFoundThrough] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name,
            company,
            email,
            phone,
            projectDetails,
            projectType,
            foundThrough,
        };

        console.log(formData);
    }

    //for hello form
    const [helloformData, hellosetFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmitHello = (event) => {
        event.preventDefault();
        console.log(helloformData);
    };

    const handleChangeHello = (event) => {
        const { name, value } = event.target;
        hellosetFormData({
            ...helloformData,
            [name]: value,
        });
    };

    useEffect(() => {
        const selects = document.querySelectorAll('select');

        selects.forEach((select) => {
            const instance = OverlayScrollbars(select.nextElementSibling, {
                className: 'select-os',
                scrollbars: {
                    visibility: 'auto',
                    autoHide: 'never',
                    autoHideDelay: 800,
                    dragScrolling: true,
                    clickScrolling: true,
                    touchSupport: true,
                    snapHandle: false,
                },
            });
        });
    }, []);

    const selectRef = useRef(null);

    useEffect(() => {
        $('.select-picker').selectpicker();

        const handleSelectRendered = () => {
            const item = $('.bootstrap-select .dropdown-menu:not(.inner)');
            if (!item.length) return;
            OverlayScrollbars(item[0], {
                className: 'select-os',
                scrollbars: {
                    visibility: 'auto',
                    autoHide: 'never',
                    autoHideDelay: 800,
                    dragScrolling: true,
                    clickScrolling: true,
                    touchSupport: true,
                    snapHandle: false,
                },
            });
        };

        handleSelectRendered();

        $('select').on('rendered.bs.select', handleSelectRendered);

        return () => {
            $('select').off('rendered.bs.select', handleSelectRendered);
        };
    }, []);

    return (
        <>
            <ContactHeader />
            <div className="contact-section">
                <div className="contact-section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <div
                                        className="nav-pills-wrapper"
                                        style={{ marginBottom: '8rem' }}
                                    >
                                        <ul
                                            className="nav nav-pills contact-form-tab"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${
                                                        activeForm === 'form1'
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    id="slope-cf7-id-38126ae1-tab"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    aria-controls="slope-cf7-id-38126ae1"
                                                    aria-selected="true"
                                                    onClick={() =>
                                                        handleFormClick('form1')
                                                    }
                                                >
                                                    <span>
                                                        Strategy Session
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${
                                                        activeForm === 'form2'
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    id="slope-cf7-id-38126ae2-tab"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    aria-controls="slope-cf7-id-38126ae2"
                                                    aria-selected="false"
                                                    onClick={() =>
                                                        handleFormClick('form2')
                                                    }
                                                >
                                                    <span>Say Hello</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="form-wrapper tab-content">
                                        {/* //strategy session form */}
                                        <div
                                            className="contact-form slope-cf7-38126ae1 tab-pane fade active show"
                                            id="slope-cf7-id-38126ae1"
                                            role="tabpanel"
                                            aria-labelledby="slope-cf7-id-38126ae1-tab"
                                            style={{
                                                display:
                                                    activeForm === 'form1'
                                                        ? 'block'
                                                        : 'none',
                                            }}
                                        >
                                            <form onSubmit={handleSubmit}>
                                                <div className="slope-contact-form">
                                                    <div className="select-wrapper">
                                                        <div>
                                                            <label>
                                                                Select type of
                                                                your project
                                                            </label>
                                                            <span className="source-select">
                                                                <select
                                                                    className="select-picker"
                                                                    ref={
                                                                        selectRef
                                                                    }
                                                                    value={
                                                                        projectType
                                                                    }
                                                                    onChange={
                                                                        setProjectType
                                                                    }
                                                                >
                                                                    <option value="">
                                                                        Select
                                                                        an
                                                                        option
                                                                    </option>
                                                                    <option value="Strategy">
                                                                        Strategy
                                                                    </option>
                                                                    <option value="Brand Identities">
                                                                        Brand
                                                                        Identities
                                                                    </option>
                                                                    <option value="Print Design">
                                                                        Print
                                                                        Design
                                                                    </option>
                                                                    <option value="UI/UX Design">
                                                                        UI/UX
                                                                        Design
                                                                    </option>
                                                                    <option value="Art Direction">
                                                                        Art
                                                                        Direction
                                                                    </option>
                                                                    <option value="Back End">
                                                                        Back End
                                                                    </option>
                                                                    <option value="Admin System">
                                                                        Admin
                                                                        System
                                                                    </option>
                                                                    <option value="Front End">
                                                                        Front
                                                                        End
                                                                    </option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <label>
                                                                How did you find
                                                                us?
                                                            </label>
                                                            <span className="source-select">
                                                                <select
                                                                    className="select-picker"
                                                                    ref={
                                                                        selectRef
                                                                    }
                                                                    value={
                                                                        foundThrough
                                                                    }
                                                                    onChange={
                                                                        setFoundThrough
                                                                    }
                                                                >
                                                                    <option value="">
                                                                        Select
                                                                        an
                                                                        option
                                                                    </option>
                                                                    <option value="Strategy">
                                                                        Google
                                                                    </option>
                                                                    <option value="Brand Identities">
                                                                        Facebook
                                                                    </option>
                                                                    <option value="Print Design">
                                                                        Other
                                                                    </option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="fields-wrapper">
                                                        <div className="input-contact">
                                                            <span className="wpcf7-form-control-wrap name-field">
                                                                <input
                                                                    value={name}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setName(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    name="name-field"
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Your name *"
                                                                />
                                                            </span>

                                                            <span className="wpcf7-form-control-wrap company-field">
                                                                <input
                                                                    value={
                                                                        company
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setCompany(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    name="company-field"
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Your company *"
                                                                />
                                                            </span>

                                                            <span className="wpcf7-form-control-wrap email-field">
                                                                <input
                                                                    value={
                                                                        email
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setEmail(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="email"
                                                                    name="email-field"
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Email address *"
                                                                />
                                                            </span>

                                                            <span className="wpcf7-form-control-wrap number-field">
                                                                <input
                                                                    value={
                                                                        phone
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPhone(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="tel"
                                                                    name="number-field"
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                                    aria-invalid="false"
                                                                    placeholder="Phone"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="textarea-contact">
                                                            <span className="wpcf7-form-control-wrap message-field">
                                                                <textarea
                                                                    value={
                                                                        projectDetails
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setProjectDetails(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    name="message-field"
                                                                    cols="40"
                                                                    rows="10"
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Tell us about the project *"
                                                                ></textarea>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="submit-contact">
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                            className="wpcf7-form-control has-spinner wpcf7-submit"
                                                        />
                                                        <span className="wpcf7-spinner"></span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* //hello form */}
                                        <div
                                            className="contact-form slope-cf7-38126ae2 tab-pane active fade active show"
                                            id="slope-cf7-id-38126ae2"
                                            role="tabpanel"
                                            aria-labelledby="slope-cf7-id-38126ae2-tab"
                                            style={{
                                                display:
                                                    activeForm === 'form2'
                                                        ? 'block'
                                                        : 'none',
                                            }}
                                        >
                                            <form onSubmit={handleSubmitHello}>
                                                <div className="slope-contact-form">
                                                    <div className="fields-wrapper">
                                                        <div className="input-contact">
                                                            <span className="wpcf7-form-control-wrap name-field">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={
                                                                        helloformData.name
                                                                    }
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Your name *"
                                                                    onChange={
                                                                        handleChangeHello
                                                                    }
                                                                />
                                                            </span>
                                                            <span className="wpcf7-form-control-wrap company-field">
                                                                <input
                                                                    type="text"
                                                                    name="company"
                                                                    value={
                                                                        helloformData.company
                                                                    }
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Your company *"
                                                                    onChange={
                                                                        handleChangeHello
                                                                    }
                                                                />
                                                            </span>
                                                            <span className="wpcf7-form-control-wrap email-field">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={
                                                                        helloformData.email
                                                                    }
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Email address *"
                                                                    onChange={
                                                                        handleChangeHello
                                                                    }
                                                                />
                                                            </span>
                                                            <span className="wpcf7-form-control-wrap number-field">
                                                                <input
                                                                    type="tel"
                                                                    name="phone"
                                                                    value={
                                                                        helloformData.phone
                                                                    }
                                                                    size="40"
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                                    aria-invalid="false"
                                                                    placeholder="Phone"
                                                                    onChange={
                                                                        handleChangeHello
                                                                    }
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="textarea-contact">
                                                            <span className="wpcf7-form-control-wrap message-field">
                                                                <textarea
                                                                    name="message"
                                                                    cols="40"
                                                                    rows="10"
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Write your message *"
                                                                    value={
                                                                        helloformData.message
                                                                    }
                                                                    onChange={
                                                                        handleChangeHello
                                                                    }
                                                                ></textarea>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="submit-contact">
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                            className="wpcf7-form-control has-spinner wpcf7-submit"
                                                        />
                                                        <span className="wpcf7-spinner"></span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
