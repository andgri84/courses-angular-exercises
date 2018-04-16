# Esercizio: TODO Service

## Requisiti

### Passo 1

* Creare una applicazione Angular

### Passo 2

* Creare una classe `ToDo`che contenga i seguenti elementi:
* * `id` di tipo _string_
* * `description` di tipo _string_
* * `complete` di tipo _boolean_

### Passo 3

* Creare un servizio `todo`che permetta la gestione di una TODO list. In particolare dovrà:
* * Tenere traccia degli elementi di tipo `ToDo` in lista
* * Ritornare la lista (senza modificarla direttamente)
* * Aggiungere elementi alla lista, passando semplicemente la descrizione (es.: _addToTo(text: string)_). Il valore di `id` deve essere autogenerato
* * Rimuovere un elemento dalla lista, passando l'elemento stesso
* * Contrassegnare un valore come _completato/non completato_
* * Avere eventuali servizi correlati (se necessari)

### Passo 4

* Creare un componente `todo` che:
* * Riceva tramite _binding_ una lista di elementi di tipo `ToDo`
* * Elenchi gli elementi in  una lista
* * Visualizzi per ogni singolo elemento della lista, il testo corrispondente, lo stato completato/non completato ed un pulsante _Delete_
* * Al click di un pulsante _Delete_, rimuova, tramite servizio, l'oggetto in questione
* * Contenga un pulsante _Clear_ che permetta di ripulire, tramite servizio, la lista

_Nota: il componente può essere affrontato come un unico blocco, oppure 'spezzandolo' in più componenti_

### Passo 5

* Aggiungere nell'applicazione un'istanza del componente `todo`
* Provare ad aggiungere una seconda istanza e vedere cosa succede all'aggiunta e/o rimozione degli elementi
