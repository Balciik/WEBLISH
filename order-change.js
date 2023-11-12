const sumbitButton = document.getElementById("nextButton");
let form = document.getElementById("form");
const previousButton = document.getElementById("previousButton");

sumbitButton.addEventListener("click", changeOrder);
let i = 0;
function changeOrder() {
  i++;

  if (i === 1) {
    innerForm = "";
    innerForm = `
           
            <form id="form">
            <p class="services-label">Jakou službu si přejete?</p>
        <div class="flex-row center">
            <div class="services-order" onclick="toggleRadio('service1')">
                <p class="service-label">Tvorba Webu
                    <input type="checkbox" name="service" id="service1" class="radio-input">    
                </p>
            </div>
            <div class="services-order" onclick="toggleRadio('service2')">
                <p for="service2" class="service-label">Tvorba e-shopu
                    <input type="checkbox" name="service" id="service2" class="radio-input">    
                </p>
            </div>
        </div>
        <div class="flex-row center">
            <div class="services-order" onclick="toggleRadio('service3')">
                
                <p class="service-label">Online marketing
                    <input type="checkbox" name="service" id="service3" class="radio-input">    
                </p>
            </div>
            <div class="services-order"onclick="toggleRadio('service4')">
                <p class="service-label">Grafické služby
                    <input type="checkbox" name="service" id="service4" class="radio-input">    
                </p>
            </div>
        </div>
        <div class="flex-row center margin-top">
        <label for="adress" class="margin-left">Adresa webu (nepovinné):
            <input type="text" name="adress" id="adress" class="form">
            </label>

        </div>
        <div class="flex-row center">
     <label for="extra" class="margin-left label-big">Další služby?
    <select class="extra-select" hidden-element" id="extra">
        <option value="1"> Optimalizace webu </option>
        <option value="2"> Správa webu</option>
        <option value="3"> Copywriting</option>
        <option value="4"> Business model</option>
        <option value="5"> Výroba loga </option>
        <option value="6"> Výroba letáků </option>
        <option value="7"> Identita firmy</option>
        <option value="8"> Tvorba vizitek</option>
        <option value="9"> SEO optimalizace</option>
        <option value="10"> Obsahový marketing </option>
        <option value="11"> Správa soc. sítí </option>
     
    </select>
        </label>
        </div>
        </form>
     
        `;

    form.innerHTML = innerForm;
  } else if (i === 2) {
    innerForm = "";
    buttonHtml = "";
    buttonHtml = `
    
        Odeslat!
        `;
    innerForm = `
        
        <form id="form">
        <p class="services-label">Více o vašich představách<em>.</em></p>
        <div class="center">
        <textarea rows="8">

        </textarea>
       </div>
       <div class="flex-row center">
        <label for="budget" class="radio-background">
         < 30 000 Kč
            <input type="radio" name="budget" id="budget" value="3" class="radio">
        </label>
        <label for="budget1" class="radio-background">
         30 000 - 60 000 Kč
        <input type="radio" name="budget" id="budget1" value="3" class="radio">
    </label>
    <label for="budget2" class="radio-background">
    > 60 000 Kč
    <input type="radio" name="budget" id="budget2" value="3" class="radio">
</label>

       </div>
   
   
    </form>
 
    `;

    form.innerHTML = innerForm;
    sumbitButton.innerHTML = buttonHtml;
  }
}

previousButton.addEventListener("click", previousOrder);

function previousOrder() {
  i--;
  if (i === 0) {
    innerForm = "";
    innerForm = `
 
    <form id="form">
    <p class="services-label">Něco málo o vás<em>.</em></p>
    <div class="center">
        <div class="small">
        <label for="name"></label>
        <input type="text" name="name" id="name" class="form" required placeholder="Jméno">
    </div>
    <div class="small">
        <label for="surname" class="margin-left"></label>
        <input type="text" name="surname" id="surname" class="form" required placeholder="Příjmení">
    </div>
    </div>

    <div class="center">
        <div class="small">

      
        <label for="mail"></label>
        <input type="email" name="mail" id="mail" class="form" required placeholder="Email">
    </div>
    <div class="small">
        <label for="surname" class="margin-left"></label>
        <input type="text" name="surname" id="surname" class="form" required placeholder="Telefon">
        </div>
    </div>
    



</form>
    

    `;
    form.innerHTML = innerForm;
    submitButton.innerHTML = buttonHtml;
  } else if (i === 1) {
    innerForm = "";
    buttonHtml = "";
    buttonHtml = `
    
        Pokračovat!
        `;
    innerForm = `
       
        <form id="form">
        <p class="services-label">Jakou službu si přejete?</p>
    <div class="flex-row center">
        <div class="services-order" onclick="toggleRadio('service1')">
            <p class="service-label">Osobní tréninky
                <input type="radio" name="service1" id="service1" class="radio-input">    
            </p>
        </div>
        <div class="services-order" onclick="toggleRadio('service2')">
            <p for="service2" class="service-label">Online coaching
                <input type="radio" name="service2" id="service2" class="radio-input">    
            </p>
        </div>
    </div>
    <div class="flex-row center">
        <div class="services-order" onclick="toggleRadio('service3')">
            
            <p class="service-label">Jídelníček
                <input type="radio" name="service3" id="service3" class="radio-input">    
            </p>
        </div>
        <div class="services-order"onclick="toggleRadio('service4')">
            <p class="service-label">Tréninkový plán
                <input type="radio" name="service4" id="service4" class="radio-input">    
            </p>
        </div>
    </div>

    </form>
 
    `;
    sumbitButton.innerHTML = buttonHtml;
    form.innerHTML = innerForm;
  }
}
