class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col-md-4 mt-3 d-flex justify-content-center">
        <div class="card" style="width: 333px;">
        <img src="${this.image}" class="card-img-top" style="max-height: 13rem;" alt="${this.model}" />
          <div class="card-body">
            <h6 class="card-title">${this.manufacture} ${this.model} / ${this.type}</h6>
            <h6 class="card-title fw-bold">Rp. ${this.rentPerDay} / hari</h6>
            <p class="card-text">${this.description}</p>
            <p class="card-text"><i class="bi bi-people"></i> ${this.capacity} Orang</p>
            <p class="card-text"><i class="bi bi-gear"></i> ${this.transmission}</p>
            <p class="card-text"><i class="bi bi-calendar4"></i> Tahun ${this.year}</p>
            <a href="#" class="btn btn-light-green w-100">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }
}
