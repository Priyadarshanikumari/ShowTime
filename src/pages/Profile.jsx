import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { FaEdit } from "react-icons/fa";

function Profile() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
  const [edit, setEdit] = useState(false);

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setEdit(false);
    alert("Profile Updated Successfully");
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">

          <div className="profile-title">
            <h2>Profile Details</h2>
            {!edit && <FaEdit className="edit-icon" onClick={() => setEdit(true)} />}
          </div>

          <p><strong>Name :</strong> {edit ? <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /> : user.name}</p>

          <p><strong>Email :</strong> {edit ? <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /> : user.email}</p>

          <p><strong>Phone :</strong> {edit ? <input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} /> : user.phone}</p>

          {edit && <button className="signin-btn" onClick={handleSave}>Save Changes</button>}

        </div>
      </div>
    </>
  );
}

export default Profile;