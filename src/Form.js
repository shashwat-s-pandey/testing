import React, { useState } from "react";

// step 1 -> create a form component
const Form = () => {

// step 2 -> define state for form data
    // Method 1 (preferred)
    const [formData, setFormData] = useState({
        username: '',
        feedback: '',
        topic: 'reactjs' 
    })

    // Method 2
    // const [username, setUserName] = useState('')
    // const [feedback, setFeedback] = useState('')
    // const [topic, setTopic] = useState('')

    // Step 4 -> handle form submission 
    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                 <label>Username</label>
                 <input 
                    type="text"
                    value={formData.username}
                    // step 3 -> handle input changes
                    onChange={(e)=> setFormData({...formData, username: e.target.value})} 
                 />
            </div>
            <div>
                <label>Feedback</label>
                <textarea
                    value={formData.feedback}
                    onChange={(e)=> setFormData({...formData, feedback: e.target.value})} 
                />
            </div>
            <div>
                <label>Topic</label>
                <select value={formData.topic} onChange={(e)=> setFormData({...formData, topic: e.target.value})} >
                    <option value='reactjs'>React.js</option>
                    <option value='angular'>Angular</option>
                    <option value='nextjs'>Next.js</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;