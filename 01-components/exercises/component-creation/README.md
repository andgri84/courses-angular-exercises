# Esercizio: Creazione di Componenti

## Requisiti

### Passo 1
* Creare una applicazione Angular ed al suo interno aggiungere (in _src > app_) una struttura di cartelle _components > products_, dove inserire gli elementi elencati nei passi seguenti.

### Passo 2

* Generare un enum `Size` che elenchi le taglie `XS`, `S`, `M`, `L`, `XL`, `XXL`, `XXXL`
* Generare un enum `Color` che elenchi una serie di colori disponibili (es.: `Yellow`, `Red`, etc.)
* Generare una classe `Product` che contenga i seguenti elementi:
* * un campo _number_ `id`
* * un campo _string_ `productName`
* * un campo _string_ `sku`
* * un campo _number_ `price`
* * un campo _string_ `description`
* * un campo _bool_ `availability`
* * un array `availableColors` che possa contenere una lista di possibili colori (tipo `Color`) 
* * un array `availableSizes` che possa contenere una lista di possibili taglie (tipo `Size`) 

### Passo 3

* Generare un componente `product-header` che visualizzi i seguenti campi (che devono poter essere passati come campi di input):
* * `title`
* * `price`
* * `isAvailable`
* Generare un componente `product-content` che visualizzi i seguenti campi (che devono poter essere passati come campi di input):
* * `description`
* * `price`
* * `isAvailable`
* * `colors`
* * `sizes`
* Generare un componente `product-footer` che visualizzi:
* * Un pulsante con testo `BUY` che, una volta cliccato, emetta un evento `buy`

### Passo 4

* Generare un componente `product` che:
* * permetta di visualizzare `product-header`
* * permetta di visualizzare `product-content`
* * permetta di visualizzare `product-footer`
* * emetta un evento `productBuy` che venga emesso quando riceve l'evento `buy` dal componente `product-footer`
* * possa ricevere come input un oggetto di tipo `Product`

_Opzionale: provate ad utilizzare la projection per la realizzazione di questo component._

### Passo 5

* In `app.component.ts` creare due istanze della classe `Product`
* In `app.component.html` visualizzare due elementi prodotto (`app-product`) e passare loro i dati generati al punto precedente 
