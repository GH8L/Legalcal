function calculatePayment() {
    const workHours = document.getElementById('work_hours').value;
    const hourlyRate = document.getElementById('hourly_rate').value;
    
    const payment = workHours * hourlyRate;
    
    document.getElementById('payment_result').innerText = `Estimated Payment: $${payment}`;
}

function calculatePenalty() {
    const terminationPenalty = document.getElementById('termination_penalty').value;
    
    document.getElementById('penalty_result').innerText = `Termination Penalty: $${terminationPenalty}`;
}
