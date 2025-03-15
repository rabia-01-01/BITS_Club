// Authentication utilities for BITS Pilani Coding Club website

/**
 * Check if a user is logged in
 * @returns {Object|null} The logged in user object or null if not logged in
 */
function isLoggedIn() {
    const authToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser') || 'null');
  
    if (authToken && currentUser) {
      return currentUser;
    }
  
    return null;
  }
  
  /**
   * Log a user in
   * @param {Object} user - The user object
   * @param {boolean} rememberMe - Whether to remember the login across sessions
   */
  function loginUser(user, rememberMe = false) {
    // Generate a simple auth token
    const authToken = btoa(user.email + ':' + Date.now());
  
    // Store only non-sensitive user data
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || 'member',
      studentId: user.studentId
    };
  
    // Store in either localStorage (persistent) or sessionStorage (temporary)
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem('authToken', authToken);
    storage.setItem('currentUser', JSON.stringify(userData));
  
    // Redirect to dashboard after successful login
    window.location.href = '/pages/member-dashboard.html';
    
    return userData;
  }
  
  // Handle user logout
  function handleLogout() {
    logoutUser();
    window.location.href = '/pages/login.html';
    localStorage.clear();
    sessionStorage.clear();
  }
  
  /**
   * Log the current user out
   */
  function logoutUser() {
    // Clear all auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('currentUser');
  }
  
  /**
   * Register a new user
   * @param {Object} userData - The user data to register
   * @returns {Object} The newly registered user
   * @throws {Error} If registration fails
   */
  function registerUser(userData) {
    // Get existing users or create empty array
    let users = [];
    const usersJSON = localStorage.getItem('users');
  
    if (usersJSON) {
      users = JSON.parse(usersJSON);
  
      // Check if email is already registered
      if (users.some(user => user.email === userData.email)) {
        throw new Error('This email is already registered.');
      }
  
      // Check if student ID is already registered
      if (userData.studentId && users.some(user => user.studentId === userData.studentId)) {
        throw new Error('This student ID is already registered.');
      }
    }
  
    // Add new user with generated ID
    const newUser = {
      id: users.length + 1,
      ...userData,
      createdAt: new Date().toISOString()
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    return newUser;
  }
  
  /**
   * Get a user by their credentials
   * @param {string} email - The user's email
   * @param {string} password - The user's password
   * @returns {Object|null} The user object or null if not found/invalid credentials
   */
  function getUserByCredentials(email, password) {
    const usersJSON = localStorage.getItem('users');
    if (!usersJSON) return null;
  
    const users = JSON.parse(usersJSON);
    return users.find(user => user.email === email && user.password === password) || null;
  }
  
  /**
   * Get a user by their ID
   * @param {number} id - The user's ID
   * @returns {Object|null} The user object or null if not found
   */
  function getUserById(id) {
    const usersJSON = localStorage.getItem('users');
    if (!usersJSON) return null;
  
    const users = JSON.parse(usersJSON);
    return users.find(user => user.id === id) || null;
  }
  
  /**
   * Update current user's profile
   * @param {Object} updates - The fields to update
   * @returns {Object} The updated user
   */
  function updateUserProfile(updates) {
    const currentUser = isLoggedIn();
    if (!currentUser) {
      throw new Error('Not logged in');
    }
  
    const usersJSON = localStorage.getItem('users');
    if (!usersJSON) {
      throw new Error('User database not found');
    }
  
    const users = JSON.parse(usersJSON);
    const userIndex = users.findIndex(user => user.id === currentUser.id);
  
    if (userIndex === -1) {
      throw new Error('User not found in database');
    }
  
    // Don't allow updating critical fields
    const safeUpdates = { ...updates };
    delete safeUpdates.id;
    delete safeUpdates.role;
  
    // Update the user
    users[userIndex] = {
      ...users[userIndex],
      ...safeUpdates,
      updatedAt: new Date().toISOString()
    };
  
    // Save updated users
    localStorage.setItem('users', JSON.stringify(users));
  
    // Update current user in session/local storage
    const userData = {
      id: users[userIndex].id,
      name: users[userIndex].name,
      email: users[userIndex].email,
      role: users[userIndex].role,
      studentId: users[userIndex].studentId
    };
  
    const storage = localStorage.getItem('authToken') ? localStorage : sessionStorage;
    storage.setItem('currentUser', JSON.stringify(userData));
  
    return userData;
  }
  
  /**
   * Check if the current user has a specific role
   * @param {string|Array} roles - The role(s) to check
   * @returns {boolean} Whether the user has the specified role
   */
  function hasRole(roles) {
    const currentUser = isLoggedIn();
    if (!currentUser || !currentUser.role) {
      return false;
    }
  
    if (Array.isArray(roles)) {
      return roles.includes(currentUser.role);
    }
  
    return currentUser.role === roles;
  }
  
  /**
   * Initialize the auth system with sample users if needed
   */
  function initAuth() {
    // Check if users already exist
    if (!localStorage.getItem('users')) {
      // Create sample admin user
      const sampleUsers = [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@bits-pilani.ac.in',
          password: 'admin123',
          role: 'admin',
          studentId: 'ADMIN001',
          branch: 'Computer Science',
          year: '4',
          createdAt: new Date().toISOString()
        }
      ];
  
      localStorage.setItem('users', JSON.stringify(sampleUsers));
      console.log('Initialized auth system with sample users');
    }
  }