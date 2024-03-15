import { useState } from 'react';

export default function RegistrationForm() {
    const [registerAs, setRegisterAs] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [formData, setFormData] = useState({
        userName: '',
        education: '',
        professionalTitle: '',
        experience: '',
        country: '',
        email: '',
        website: '',
        contactNumber: '',
        organizationName: '',
        organizationType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your submission logic here, like sending data to server
    };

    const handleRegisterAsChange = (e) => {
        setRegisterAs(e.target.value);
    };

    const handleOrganizationTypeChange = (e) => {
        setOrganizationType(e.target.value);
    };

    return (
        <div className="container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Register As:</label>
                    <select name="registerAs" value={registerAs} onChange={handleRegisterAsChange} required>
                        <option value="">Select...</option>
                        <option value="jobSeeker">Job Seeker</option>
                        <option value="organization">Organization</option>
                    </select>
                </div>
                {registerAs === 'jobSeeker' && (
                    <>
                        <div className="form-group">
                            <label>User Name:</label>
                            <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Education:</label>
                            <input type="text" name="education" value={formData.education} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Professional Title:</label>
                            <input type="text" name="professionalTitle" value={formData.professionalTitle} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Experience:</label>
                            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
                        </div>
                    </>
                )}
                {registerAs === 'organization' && (
                    <>
                        <div className="form-group">
                            <label>Organization Type:</label>
                            <select name="organizationType" value={organizationType} onChange={handleOrganizationTypeChange} required>
                                <option value="">Select...</option>
                                <option value="employer">Employer</option>
                                <option value="recruiter">Recruiter</option>
                                <option value="academia">Academia</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Organization Name:</label>
                            <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} required />
                        </div>
                    </>
                )}
                <div className="form-group">
                    <label>Country:</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Website:</label>
                    <input type="text" name="website" value={formData.website} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>

            <style jsx>{`
                .container {
                    max-width: 500px;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                }

                input,
                select {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}
