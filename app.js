class User {
    #name;
    #password;
    #isSuperAdmin;
    #privateFeature;
    constructor(name, avatar, role, password, privateFeature, isSuperAdmin) {
      this.#name = name;
      this.#password = password;
      this.#privateFeature = privateFeature;
      this.role = role;
      this.avatar = avatar;
      this.#isSuperAdmin = isSuperAdmin;
    }
    getRole() {
        return this.role ? "SuperAdmin" : "Admin";
    }
    getPrivateFeature() {
      return this.#privateFeature;
    }
    getIsSuperAdmin() {
        return this.#isSuperAdmin;
      }
  }
  function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = new User('11', '22', '33');
    if (username === user.name && password === user.password) {
      const privateFeature = user.getPrivateFeature();
      sessionStorage.setItem('privateFeature', privateFeature);
    } else {
      alert('Invalid Username or Password');
    }
  }
  
  document.getElementById('loginBtn').addEventListener('click', authenticateUser);
  
  function auth() {
    const user = new User('private');
    const privateFeature = sessionStorage.getItem('privateFeature');
    if (privateFeature === user.getPrivateFeature()) {
      return true;
    }
    return false;
  }
  function isUserSuperAdmin() {
    const user = new User(true);
    const isSuperAdmin = sessionStorage.getItem('isSuperAdmin');
    if (isSuperAdmin === 'true' && user.getIsSuperAdmin()) {
      return true;
    }
    return false;
  }
  function deleteData() {
    if (!isUserSuperAdmin()) {
      return;
    }
  }
  function insertData() {
    if (!isUserSuperAdmin()) {
      return;
    }

  }
  function updateData() {
    if (!isUserSuperAdmin()) {
      return;
    }
  }
  function selectData() {
    if (!isUserSuperAdmin()) {
      return;
    }
  }