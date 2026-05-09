// Admin Dashboard Functionality

// Store admin data in localStorage
const ADMIN_STORAGE_KEY = 'teaHouseAdmin';
const TEAS_KEY = 'teaHouseTeas';
const ORDERS_KEY = 'teaHouseOrders';

// Initialize admin data
function initializeAdminData() {
  if (!localStorage.getItem(ADMIN_STORAGE_KEY)) {
    const defaultTeas = [
      { id: 1, name: 'Classic Green Tea', description: 'Fresh, grassy, and lightly sweet', benefits: 'Boosts focus', price: 4.50, stock: 50 },
      { id: 2, name: 'Chamomile Calm', description: 'Soft floral notes', benefits: 'Relaxation', price: 4.00, stock: 40 },
      { id: 3, name: 'Spiced Chai', description: 'Warm spices blend', benefits: 'Energy boost', price: 5.00, stock: 30 }
    ];
    localStorage.setItem(TEAS_KEY, JSON.stringify(defaultTeas));
    localStorage.setItem(ORDERS_KEY, JSON.stringify([]));
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify({ initialized: true }));
  }
}

// Get all teas
function getTeas() {
  return JSON.parse(localStorage.getItem(TEAS_KEY)) || [];
}

// Get all orders
function getOrders() {
  return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
}

// Save teas to localStorage
function saveTeas(teas) {
  localStorage.setItem(TEAS_KEY, JSON.stringify(teas));
}

// Save orders to localStorage
function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

// Login functionality
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    localStorage.setItem('adminLoggedIn', 'true');
    document.getElementById('login-screen').classList.remove('active');
    const dashboard = document.getElementById('admin-dashboard');
    dashboard.style.display = 'flex';
    dashboard.classList.add('animate-in');
    loadDashboard();
  } else {
    alert('Invalid credentials. Try admin / password123');
  }
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('adminLoggedIn');
  const dashboard = document.getElementById('admin-dashboard');
  dashboard.classList.remove('animate-in');
  setTimeout(() => {
    dashboard.style.display = 'none';
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('login-form').reset();
  }, 300);
});

// Check if admin is logged in on page load
window.addEventListener('load', () => {
  initializeAdminData();
  if (localStorage.getItem('adminLoggedIn') === 'true') {
    document.getElementById('login-screen').classList.remove('active');
    const dashboard = document.getElementById('admin-dashboard');
    dashboard.style.display = 'flex';
    dashboard.classList.add('animate-in');
    loadDashboard();
  } else {
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('admin-dashboard').style.display = 'none';
  }
});

// Navigation between sections
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const section = e.target.dataset.section;
    switchSection(section);
  });
});

function switchSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionName).classList.add('active');

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

  // Load section-specific data
  if (sectionName === 'teas') {
    loadTeasList();
  } else if (sectionName === 'orders') {
    loadOrdersList();
  } else if (sectionName === 'analytics') {
    loadAnalytics();
  }
}

// Load Dashboard
function loadDashboard() {
  const teas = getTeas();
  const orders = getOrders();
  const cart = JSON.parse(localStorage.getItem('teaCart')) || [];

  document.getElementById('total-orders').textContent = orders.length;
  document.getElementById('total-revenue').textContent = `$${calculateTotalRevenue(orders).toFixed(2)}`;
  document.getElementById('total-teas').textContent = teas.length;
  
  // Find top tea from cart items
  const topTea = cart.length > 0 ? cart[0].name : 'N/A';
  document.getElementById('top-tea').textContent = topTea;

  // Load recent orders
  loadRecentOrders();
}

function calculateTotalRevenue(orders) {
  return orders.reduce((sum, order) => sum + (order.total || 0), 0);
}

function loadRecentOrders() {
  const orders = getOrders();
  const recentList = document.getElementById('recent-orders-list');

  if (orders.length === 0) {
    recentList.innerHTML = '<tr><td colspan="5" style="text-align: center;">No orders yet</td></tr>';
    return;
  }

  recentList.innerHTML = orders.slice(-5).reverse().map((order, index) => `
    <tr>
      <td>#${orders.length - index}</td>
      <td>${order.items || 'N/A'}</td>
      <td>$${order.total ? order.total.toFixed(2) : '0.00'}</td>
      <td>${order.date || 'N/A'}</td>
      <td><span class="status-badge status-completed">Completed</span></td>
    </tr>
  `).join('');
}

// Tea Management
document.querySelector('.add-tea-btn').addEventListener('click', () => {
  document.getElementById('add-tea-form').classList.toggle('hidden');
});

document.getElementById('cancel-tea-form').addEventListener('click', () => {
  document.getElementById('add-tea-form').classList.add('hidden');
  document.getElementById('tea-form').reset();
});

document.getElementById('tea-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const teas = getTeas();
  const newTea = {
    id: Date.now(),
    name: document.getElementById('tea-name').value,
    description: document.getElementById('tea-description').value,
    benefits: document.getElementById('tea-benefits').value,
    price: parseFloat(document.getElementById('tea-price').value),
    stock: parseInt(document.getElementById('tea-stock').value)
  };

  teas.push(newTea);
  saveTeas(teas);
  
  document.getElementById('tea-form').reset();
  document.getElementById('add-tea-form').classList.add('hidden');
  alert('Tea added successfully!');
  loadTeasList();
  loadDashboard();
});

function loadTeasList() {
  const teas = getTeas();
  const teasList = document.getElementById('teas-list');

  if (teas.length === 0) {
    teasList.innerHTML = '<tr><td colspan="5" style="text-align: center;">No teas added yet</td></tr>';
    return;
  }

  teasList.innerHTML = teas.map(tea => `
    <tr>
      <td><strong>${tea.name}</strong></td>
      <td>$${tea.price.toFixed(2)}</td>
      <td>${tea.stock} units</td>
      <td>${tea.description}</td>
      <td>
        <div class="action-buttons">
          <button class="edit-btn" onclick="editTea(${tea.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTea(${tea.id})">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function editTea(teaId) {
  const teas = getTeas();
  const tea = teas.find(t => t.id === teaId);
  
  if (tea) {
    document.getElementById('tea-name').value = tea.name;
    document.getElementById('tea-description').value = tea.description;
    document.getElementById('tea-benefits').value = tea.benefits;
    document.getElementById('tea-price').value = tea.price;
    document.getElementById('tea-stock').value = tea.stock;
    document.getElementById('add-tea-form').classList.remove('hidden');
  }
}

function deleteTea(teaId) {
  if (confirm('Are you sure you want to delete this tea?')) {
    let teas = getTeas();
    teas = teas.filter(t => t.id !== teaId);
    saveTeas(teas);
    alert('Tea deleted successfully!');
    loadTeasList();
    loadDashboard();
  }
}

// Orders Management
function loadOrdersList() {
  const cart = JSON.parse(localStorage.getItem('teaCart')) || [];
  const ordersList = document.getElementById('orders-list');

  if (cart.length === 0) {
    ordersList.innerHTML = '<tr><td colspan="6" style="text-align: center;">No orders found</td></tr>';
    return;
  }

  ordersList.innerHTML = cart.map((item, index) => {
    const total = parseFloat(item.price ? item.price.replace('$', '') : 0);
    return `
      <tr>
        <td>#${index + 1}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${item.name}</td>
        <td>$${total.toFixed(2)}</td>
        <td><span class="status-badge status-completed">Completed</span></td>
        <td>
          <button class="edit-btn" onclick="viewOrder(${index})">View</button>
        </td>
      </tr>
    `;
  }).join('');
}

function viewOrder(index) {
  const cart = JSON.parse(localStorage.getItem('teaCart')) || [];
  const order = cart[index];
  alert(`Order #${index + 1}\nTea: ${order.name}\nPrice: ${order.price}\nStatus: Completed`);
}

// Analytics
function loadAnalytics() {
  const cart = JSON.parse(localStorage.getItem('teaCart')) || [];
  const orders = getOrders();
  const teas = getTeas();

  const totalSales = cart.reduce((sum, item) => {
    const price = parseFloat(item.price ? item.price.replace('$', '') : 0);
    return sum + price;
  }, 0);

  document.getElementById('monthly-sales').textContent = `$${totalSales.toFixed(2)}`;
  document.getElementById('monthly-orders').textContent = cart.length;
  document.getElementById('avg-order-value').textContent = `$${cart.length > 0 ? (totalSales / cart.length).toFixed(2) : '0.00'}`;

  // Tea popularity
  const teaCount = {};
  cart.forEach(item => {
    teaCount[item.name] = (teaCount[item.name] || 0) + 1;
  });

  const popularityList = document.getElementById('tea-popularity-list');
  const sorted = Object.entries(teaCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (sorted.length === 0) {
    popularityList.innerHTML = '<li>No data available</li>';
  } else {
    popularityList.innerHTML = sorted.map(([name, count]) => `
      <li>
        <span>${name}</span>
        <span class="tea-count">${count} orders</span>
      </li>
    `).join('');
  }
}

// Settings
document.querySelector('.save-settings-btn')?.addEventListener('click', () => {
  const settings = {
    storeName: document.getElementById('store-name').value,
    storeAddress: document.getElementById('store-address').value,
    storePhone: document.getElementById('store-phone').value,
    storeHours: document.getElementById('store-hours').value,
    taxRate: document.getElementById('tax-rate').value
  };
  
  localStorage.setItem('storeSettings', JSON.stringify(settings));
  alert('Settings saved successfully!');
});

// Load settings on page load
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('storeSettings'));
  if (settings) {
    document.getElementById('store-name').value = settings.storeName;
    document.getElementById('store-address').value = settings.storeAddress;
    document.getElementById('store-phone').value = settings.storePhone;
    document.getElementById('store-hours').value = settings.storeHours;
    document.getElementById('tax-rate').value = settings.taxRate;
  }
}

// Initialize on load
window.addEventListener('load', loadSettings);
