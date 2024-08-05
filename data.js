const mockData = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User"
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User"
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User"
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User"
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin"
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 12,
      name: "Leo Green",
      age: 27,
      role: "Designer",
      hireDate: "2021-01-30",
      isActive: true,
      salary: 68000,
      department: "Design",
      projectsCompleted: 3,
      lastLogin: "2024-07-28T16:15:00.000Z",
      accessLevel: "User"
    },
    {
      id: 13,
      name: "Mona Blue",
      age: 36,
      role: "Engineer",
      hireDate: "2019-11-18",
      isActive: true,
      salary: 87000,
      department: "Development",
      projectsCompleted: 11,
      lastLogin: "2024-07-30T14:50:00.000Z",
      accessLevel: "User"
    },
    {
      id: 14,
      name: "Nina Brown",
      age: 25,
      role: "Intern",
      hireDate: "2023-04-14",
      isActive: true,
      salary: 42000,
      department: "Development",
      projectsCompleted: 2,
      lastLogin: "2024-07-31T11:00:00.000Z",
      accessLevel: "User"
    },
    {
      id: 15,
      name: "Oscar White",
      age: 42,
      role: "Director",
      hireDate: "2016-05-11",
      isActive: true,
      salary: 125000,
      department: "Management",
      projectsCompleted: 22,
      lastLogin: "2024-07-29T09:33:00.000Z",
      accessLevel: "Admin"
    }
  ];

  
  
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const applyFilters = (employee) => {
    const idFilter = document.getElementById('idFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const roleFilter = document.getElementById('roleFilter').value.toLowerCase();
    const isActiveFilter = document.getElementById('isActiveFilter').value;
    const salaryFilter = document.getElementById('salaryFilter').value;
    const departmentFilter = document.getElementById('departmentFilter').value.toLowerCase();
    const projectsCompletedFilter = document.getElementById('projectsCompletedFilter').value;
    const accessLevelFilter = document.getElementById('accessLevelFilter').value.toLowerCase();

    return (
        (idFilter === '' || employee.id == idFilter) &&
        (ageFilter === '' || employee.age == ageFilter) &&
        (roleFilter === '' || employee.role.toLowerCase().includes(roleFilter)) &&
        (isActiveFilter === '' || employee.isActive.toString() === isActiveFilter) &&
        (salaryFilter === '' || employee.salary == salaryFilter) &&
        (departmentFilter === '' || employee.department.toLowerCase().includes(departmentFilter)) &&
        (projectsCompletedFilter === '' || employee.projectsCompleted == projectsCompletedFilter) &&
        (accessLevelFilter === '' || employee.accessLevel.toLowerCase().includes(accessLevelFilter))
    );
};

const populateTable = () => {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    const filteredData = mockData.filter(applyFilters);

    filteredData.forEach(employee => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.role}</td>
            <td>${formatDate(employee.hireDate)}</td>
            <td>${employee.isActive ? 'Yes' : 'No'}</td>
            <td>${employee.salary.toLocaleString()}</td>
            <td>${employee.department}</td>
            <td>${employee.projectsCompleted}</td>
            <td>${formatDate(employee.lastLogin)}</td>
            <td>${employee.accessLevel}</td>
        `;

        tableBody.appendChild(row);
    });
};

const addFilterListeners = () => {
    const filterInputs = document.querySelectorAll('.filters input, .filters select');
    filterInputs.forEach(input => {
        input.addEventListener('input', populateTable);
    });
};

const getData = () => {
    populateTable();
    addFilterListeners();
};

window.onload = getData;
