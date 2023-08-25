 
let howInnerHTML = "";

document.addEventListener("change", function() {
    const select = document.querySelector(".how-select")
    const selectedValue = select.value;
if (selectedValue ==="1") {
    howInnerHTML = "";
    howInnerHTML = `
    <p class="how-does-header">
    Výroba webových stránek!
</p>
<hr class="how-does-line">
<div class="how-does-text1">
    <p class="how-does-text-header">
        1. DOTAZ
    </p>
    <p class="how-does-text">
        Stačí pouze vyplnit kontaktní formulář, popsat nám vaší firmu a vaše představy. Dodat odpovědné podklady a naše spolupráce může nezávazně počít!
    </p>
</div>

<div class="how-does-text2">
    <p class="how-does-text-header">
        2. NÁVRH
    </p>
    <p class="how-does-text">
        Podle vašich představ vyhotovíme první návrh, do kterého se snažíme předat naší fantazii, aby váš web mohl vyčnívat nad ostatníma! Po vaší korekci následně návrh pozměníme, aby Vám vyhovoval!
    </p>
</div>

<div class="how-does-text3">
    <p class="how-does-text-header">
        3. CENA
    </p>
    <p class="how-does-text">
        Pokud již máme celou webovou stránku navrhnutou a Vámi odsouhlasenou, se vrheneme na vycenění celého projektu!
    </p>
</div>

<div class="how-does-text4">
    <p class="how-does-text-header">
        4. REALIZACE
    </p>
    <p class="how-does-text">
        A už je to jenom na nás! Vám pouze příjde již hotový projekt, ke kterému se vyjádříte, popřípadě poladíme nějaké mouchy a vaše stránka může do světa!
    </p>
</div>
<div class="how-does-art">
    <div class="group1">
        
        
        <div class="circle1">
            1
        </div>
        <hr class="art-line2">
       
    </div>
    <div class="group2">
        <div class="circle2">
            2
        </div>
        <hr class="art-line2">
    </div>
    
    <div class="group2">
     
        <div class="circle2">
            
            3
        </div>
        <hr class="art-line2">
    </div>
    <div class="group2">
        <div class="circle2">
            4
        </div>
        
    </div>
</div>
    `


   document.querySelector(".how-does-it-work").innerHTML = howInnerHTML;
}
 else if (selectedValue === "2") {
   
 
    howInnerHTML = '';
    howInnerHTML +=`
    <p class="how-does-header">
    Výroba e-shopu!
</p>
<hr class="how-does-line">
<div class="how-does-text1">
    <p class="how-does-text-header">
        1. DOTAZ
    </p>
    <p class="how-does-text">
        Stačí pouze vyplnit kontaktní formulář, povědět nám váš rozpočet a ideální představu o eshopu. Dodat odpovědné podklady a naše spolupráce může nezávazně počít!
    </p>
</div>

<div class="how-does-text2">
    <p class="how-does-text-header">
        2. NÁVRH
    </p>
    <p class="how-does-text">
        Podle vašich představ vyhotovíme první návrh, do kterého se snažíme předat naší fantazii, aby váš e-shop mohl vyčnívat nad ostatníma, čím se dostanete do vrchních řádku vyhledávače a zvýšíte prodeje.
    </p>
</div>

<div class="how-does-text3">
    <p class="how-does-text-header">
        3. CENA
    </p>
    <p class="how-does-text">
        Pokud již máme celý e-shop navrhnutou a Vámi odsouhlasenou, se vrheneme na vycenění celého projektu.
    </p>
</div>

<div class="how-does-text4">
    <p class="how-does-text-header">
        4. REALIZACE
    </p>
    <p class="how-does-text">
        A už je to jenom na nás! Vám pouze příjde již hotový projekt, ke kterému se vyjádříte, popřípadě poladíme nějaké mouchy a váš e-shop může do světa!
    </p>
</div>
<div class="how-does-art">
    <div class="group1">
        
        
        <div class="circle1">
            1
        </div>
        <hr class="art-line2">
       
    </div>
    <div class="group2">
        <div class="circle2">
            2
        </div>
        <hr class="art-line2">
    </div>
    
    <div class="group2">
     
        <div class="circle2">
            
            3
        </div>
        <hr class="art-line2">
    </div>
    <div class="group2">
        <div class="circle2">
            4
        </div>
        
    </div>
</div>

    `
 
   document.querySelector(".how-does-it-work").innerHTML = howInnerHTML;

    
}  else if (selectedValue === "4") {
   
 
    howInnerHTML = '';
    howInnerHTML +=`
    <p class="how-does-header">
    Optimalizace webových stránek!
</p>
<hr class="how-does-line">
<div class="how-does-text1">
    <p class="how-does-text-header">
        1. DOTAZ
    </p>
    <p class="how-does-text">
        Stačí pouze vyplnit kontaktní formulář, kde nám uvedete adresu vašeho webu a její zdrojový kód a naše spolupráce může začít.
    </p>
</div>

<div class="how-does-text2">
    <p class="how-does-text-header">
        2. CENA
    </p>
    <p class="how-does-text">
        Pokud již víme kolik práce bude potřeba odvést, naceníme celý projekt.
    </p>
</div>

<div class="how-does-text3">
    <p class="how-does-text-header">
        3. REALIZACE
    </p>
    <p class="how-does-text">
        Už je na pouze na nás stránku optimalizovat, aby jsme zařídili výsledek, se kterým budete spokojení.
    </p>
</div>


<div class="how-does-art">
    <div class="group1">
        
        
        <div class="circle1">
            1
        </div>
        <hr class="art-line2">
       
    </div>
    <div class="group2">
        <div class="circle2">
            2
        </div>
        <hr class="art-line2">
    </div>
    
    <div class="group2">
     
        <div class="circle2">
            
            3
        </div>
        
    </div>
   
</div>

    `
 
   document.querySelector(".how-does-it-work").innerHTML = howInnerHTML;

    
} else if (selectedValue === "3") {
   
 
    howInnerHTML = '';
    howInnerHTML +=`
    <p class="how-does-header">
    Předělání webových stránek!
</p>
<hr class="how-does-line">
<div class="how-does-text1">
    <p class="how-does-text-header">
        1. DOTAZ
    </p>
    <p class="how-does-text">
        Stačí pouze vyplnit kontaktní formulář, kde nám uvedete adresu vašeho webu, co byste na něm chtěli změnit a naše spolupráce může začít.
    </p>
</div>

<div class="how-does-text2">
    <p class="how-does-text-header">
        2. NÁVRH
    </p>
    <p class="how-does-text">
        Podle vašich představ vyhotovíme první návrh, do kterého se snažíme předat naší fantazii, aby vaše nová předělaná stránka vyčnívala nad ostatními, čím se zajistí lepší viditelnost vaší webovky.
    </p>
</div>

<div class="how-does-text3">
    <p class="how-does-text-header">
        3. CENA
    </p>
    <p class="how-does-text">
        Pokud již máme celou stránku navrhnutou a Vámi odsouhlasenou, se vrheneme na vycenění celého projektu.
    </p>
</div>

<div class="how-does-text4">
    <p class="how-does-text-header">
        4. REALIZACE
    </p>
    <p class="how-does-text">
        A už je to jenom na nás! Vám pouze příjde již hotový projekt, ke kterému se vyjádříte, popřípadě poladíme nějaké mouchy a vaše stránka může do světa!
    </p>
</div>
<div class="how-does-art">
    <div class="group1">
        
        
        <div class="circle1">
            1
        </div>
        <hr class="art-line2">
       
    </div>
    <div class="group2">
        <div class="circle2">
            2
        </div>
        <hr class="art-line2">
    </div>
    
    <div class="group2">
     
        <div class="circle2">
            
            3
        </div>
        <hr class="art-line2">
    </div>
    <div class="group2">
        <div class="circle2">
            4
        </div>
        
    </div>
</div>

    `
 
   document.querySelector(".how-does-it-work").innerHTML = howInnerHTML;

    
}  else if (selectedValue === "5") {
   
 
    howInnerHTML = '';
    howInnerHTML +=`
    <p class="how-does-header">
    Grafické služby!
</p>
<hr class="how-does-line">
<div class="how-does-text1">
    <p class="how-does-text-header">
        1. DOTAZ
    </p>
    <p class="how-does-text">
        Stačí pouze vyplnit kontaktní formulář, kde nám řeknete, co byste si ideálně představovali. Následně se spojíme a projdeme vše důležité.
</div>

<div class="how-does-text2">
    <p class="how-does-text-header">
        2. CENA
    </p>
    <p class="how-does-text">
        Pokud již víme, co za práci bude od nás požadována, celý projekt naceníme. <br>
        Cenu nebereme na lehkou váhu, všechny informace a časové odhady se nacházejí v dokukmentu!
    </p>
</div>

<div class="how-does-text3">
    <p class="how-does-text-header">
        3. REALIZACE
    </p>
    <p class="how-does-text">
        Dle vašich představ vytvoříme požadovanou grafiku, přičemž v pracích se snažíme předat co nejvíce naší kreativity a fantazie, aby výsledný projekt opravdu stál za to.
    </p>
</div>

<div class="how-does-text4">
    <p class="how-does-text-header">
        4. REVIZE A PŘEDÁNÍ
    </p>
    <p class="how-does-text">
        Pokud již máme projekt hotový, předáme Vám ho k revizi, abyste pořešili případné mouchy <br>
        Poté vám pouze zašleme výsledný projekt v průmyslovém grafické standardu.
    </p>
</div>
<div class="how-does-art">
    <div class="group1">
        
        
        <div class="circle1">
            1
        </div>
        <hr class="art-line2">
       
    </div>
    <div class="group2">
        <div class="circle2">
            2
        </div>
        <hr class="art-line2">
    </div>
    
    <div class="group2">
     
        <div class="circle2">
            
            3
        </div>
        <hr class="art-line2">
    </div>
    <div class="group2">
        <div class="circle2">
            4
        </div>
        
    </div>
</div>

    `
 
   document.querySelector(".how-does-it-work").innerHTML = howInnerHTML;

    
}
});