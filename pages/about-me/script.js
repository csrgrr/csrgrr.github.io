 // Calculate work experience
 const startDate = new Date('2022-04-01'); // Start date (April 1, 2022)

 function calculateWorkExperience() {
     const now = new Date();
     const timeWorked = now - startDate;

     const seconds = Math.floor(timeWorked / 1000);
     const minutes = Math.floor(seconds / 60);
     const hours = Math.floor(minutes / 60);
     const days = Math.floor(hours / 24);
     const months = Math.floor(days / 30.44); // Approximately 30.44 days in a month
     const years = Math.floor(months / 12);

     const remainingSeconds = seconds % 60;
     const remainingMinutes = minutes % 60;
     const remainingHours = hours % 24;
     const remainingDays = Math.floor(days % 30.44);
     const remainingMonths = months % 12;

     document.getElementById('years').textContent = years;
     document.getElementById('months').textContent = remainingMonths;
     document.getElementById('days').textContent = remainingDays;
     document.getElementById('hours').textContent = remainingHours;
     document.getElementById('minutes').textContent = remainingMinutes;
     document.getElementById('seconds').textContent = remainingSeconds;
}

 setInterval(calculateWorkExperience, 1000);

 calculateWorkExperience();