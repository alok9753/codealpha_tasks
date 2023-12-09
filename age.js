function calculateAge() {
    const dob = document.getElementById('dob').value;
    const mob = document.getElementById('mob').value;
    const yob = document.getElementById('yob').value;
  
    if (dob && mob && yob) {
      const birthDate = new Date(`${mob}/${dob}/${yob}`);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
  
      // Adjust age based on the birth date in the current year
      if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
      }
  
      document.getElementById('result').innerText = `Your age is: ${age} years`;
      document.getElementById('result').reset();
    } else {
      alert('Please enter a valid date of birth, month, and year.');
    }
  }
  