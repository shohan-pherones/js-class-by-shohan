var computer = {
    price: 50000,
    cpu: 'amd ryzen 5',
    ram: 16,
    hdd: 1
}

computer.price = 80000;
computer['cpu'] = 'intel';
computer.ram = 32;
console.log(computer);