import React, { useEffect , useState} from "react";
import Modal from "../Modal/Modal"

function Header({setStudent, students, setLoading}){
    const [showModal, setShowModal] = useState(false);
    //---------------  Add Student START  --------------
    const handleAddStudent = (evt) => {
        setLoading(true)
        evt.preventDefault()

        console.log(evt.target.group.value);
        console.log(evt.target.firstName.value);
        console.log(evt.target.lastName.value);
        console.log(evt.target.checkbox.checked);

        let studentObj = {
            id:students.length ? students[students.length - 1].id + 1 : 1,
            firstName:evt.target.firstName.value,
            lastName:evt.target.lastName.value,
            groupId:evt.target.group.value,
            doesWork:evt.target.checkbox.checked
        }
        // console.log(studentObj);

        setStudent([...students, studentObj])
        setShowModal(false)
        evt.target.reset()
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    //-------------  Add student END  ---------------

    //----------------   Select Change START  -------------
    
    const handleSelectChange = (evt) => {
        setLoading(true)
        const studentData = JSON.parse(window.localStorage.getItem("students"));
        if (evt.target.value === 0 ) {
            setStudent(studentData)
        }
        else{
            const filteredStudents = studentData.filter(item => item.groupId === evt.target.value)
            setStudent(filteredStudents)
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    //---------------  Select Change END ---------------


    // -------------- Search Change START  ---------------

    const handleInputSearchChange = (evt) => {
        setLoading(true)
        const studentData = JSON.parse(window.localStorage.getItem("students"))
        const filteredDate = studentData.filter(item =>
            item.firstName.toLowerCase().includes(evt.target.value.toLowerCase()))
        setStudent(filteredDate);
        setTimeout(() =>{
            setLoading(false)
        },2000)
    }
    // -------------- Search Change END  ---------------


    useEffect(() => {
        window.localStorage.setItem("students", JSON.stringify(students))
    },[showModal, students])
    return (
        <header className="py-3 shadow-md">
            <div className="flex items-center container mx-auto justify-between">
                <input 
                    onChange={handleInputSearchChange}
                    className="w-[69%] border-[1px] border-black p-3 rounded-md"
                    type="text"
                    placeholder="Searching.."
                />
                <select onChange={handleSelectChange} className="p-3 rounded-md w-[14%] border-[1px] border-black appearance-none">
                    <option value={"0"}>All</option>
                    <option value={"1"}>React N1</option>
                    <option value={"2"}>React N2</option>
                    <option value={"3"}>React N3</option>
                </select>
                <button onClick={() => setShowModal(true)} className="w-[14%] bg-green-500 text-white font-semibold p-3 text-[17px] rounded-md">
                    Add Student
                </button>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form onSubmit={handleAddStudent} className="flex flex-col px-5 space-y-8">
                    
                    <label className="flex flex-col">
                        <span className="font-semibold text-[18px] text-white mb-1">
                            First Name
                        </span>
                        <input 
                        name="firstName"
                        className="p-2 rounded-md"
                        placeholder="First Name"
                        />
                    </label>
                    

                    <label className="flex flex-col">
                        <span className="font-semibold text-[18px] text-white mb-1">
                            Last Name
                        </span>
                        <input

                            name="lastName"
                            className="p-2 rounded-md"
                            placeholder="Last Name"
                        />
                    </label>


                    <label className="flex flex-col">
                        <span className="font-semibold text-[18px] text-white mb-1">
                            Select group
                        </span>
                        <select name="group" className="p-2 rounded-md border-[1px] border-black appearance-none">
                            <option value={1}>React N1</option>
                            <option value={2}>React N2</option>
                            <option value={3}>React N3</option>
                        </select>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input name="checkbox" type="checkbox" />
                        <span className="text-white font-semibold text-[18px]">Does Work</span>
                    </label>

                    <div className="flex items-center justify-between">
                        <button className="bg-red-500 text-white font-semibold p-3 rounded-md w-[45%]">
                            Cencel
                        </button>
                        
                        <button className="bg-green-500 text-white font-semibold p-3 rounded-md w-[45%]">
                            Add
                        </button>
                    </div>
                </form>
            </Modal>
        </header>
    );
}
export default Header;