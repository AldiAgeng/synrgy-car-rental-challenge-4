class Car {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
    this.searchBtn = document.getElementById("btn-search");
    this.totalPassenger = document.getElementById("jumlah-penumpang");
    this.pickUpTime = document.getElementById("waktu-jemput");
    this.date = document.getElementById("tanggal");
  }

  async init() {
    await this.load();

    this.searchBtn.onclick = this.search;
  }

  search = () => {
    let dateTime = new Date(`${this.date.value} ${this.pickUpTime.value}`);
    console.log(dateTime);
    let cards = "";

    Component.list
      .filter((car) => car.capacity > this.totalPassenger.value && new Date(car.availableAt) > dateTime)
      .forEach((car) => {
        cards += car.render();
        this.carContainerElement.innerHTML = cards;
      });
  };

  async load() {
    const cars = await Binar.listCars();
    Component.init(cars);
  }
}
