// const inputs = document.querySelectorAll('.controls input');
//querySelectorAll array olarak veriyor.
const inputElement = document.getElementsByTagName('input');
//getElementsByTagName htmlcollection verdiğinden dolayı arraya çevirmemiz gerekiyor.
const inputs = Array.from(inputElement);
console.log(inputs);

function handleUpdate() {
    // console.log(this);
    // console.log(this.dataset)
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    //this.dataset dediğimizde html kısmında sadece data-sizing verdiğimiz için onu alıyor.Ama data-weigth veya başka data özellikleri ekleseydik hepsini alıyordu.
    //Burada data-sizing olan iki input elementinin sizing değerleri ve color da data değeri olmadığı için veya "" dedik colordaki eventi de aldık.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
