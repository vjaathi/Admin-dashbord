import "./NewUser.css"

const NewUser = () => {
    return(
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label > UserName</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label > FullName</label>
            <input type="text" placeholder="john smith" />
          </div>
          <div className="newUserItem">
            <label > Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label > password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label > Phone</label>
            <input type="number" placeholder="+91 764 319 9827" />
          </div>
          <div className="newUserItem">
            <label > Address</label>
            <input type="text" placeholder="Bangaluru | IND" />
          </div>
          <div className="newUserItem">
            <label > Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="others" value="others" />
              <label for="others">Others</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          <button className="newUserBtn">Create</button>
          </div>

        </form>
      </div>
    )
}

export default NewUser