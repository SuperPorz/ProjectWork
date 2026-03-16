# 📦 Gestione Ordini Magazzino

Web App Full Stack per la gestione degli ordini di un magazzino, sviluppata come **Project Work** del percorso IFTS _Tecnico per la Progettazione e lo Sviluppo di Applicazioni Informatiche – Full Stack Developer con Competenze DevOps e Cloud_ (Operazione Rif. PA 2024-22156/RER, Regione Emilia-Romagna).

## ✨ Funzionalità

- Visualizzazione di tutti gli ordini presenti nel database in una tabella
- Inserimento di nuovi ordini tramite form
- Comunicazione asincrona frontend ↔ backend tramite chiamate API REST (fetch/Axios)
- Dati scambiati in formato JSON

## 🗂️ Struttura del progetto

```
ProjectWork/
├── backend/        # API REST (Node.js + Express)
├── frontend/       # Interfaccia utente (HTML, CSS, JavaScript)
└── .gitignore
```

## 🛠️ Tecnologie utilizzate

| Layer | Tecnologie |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Tools | XAMPP / phpMyAdmin |

## ⚙️ Installazione e avvio

### Prerequisiti

- [Node.js](https://nodejs.org/) (v18+)
- [XAMPP](https://www.apachefriends.org/) oppure un server MySQL attivo

### 1. Clona il repository

```bash
git clone https://github.com/SuperPorz/ProjectWork.git
cd ProjectWork
```

### 2. Configura il database

1. Avvia XAMPP e assicurati che il servizio **MySQL** sia in esecuzione
2. Apri **phpMyAdmin** (`http://localhost/phpmyadmin`)
3. Crea un nuovo database (es. `ordini_magazzino`)
4. Esegui la seguente query per creare la tabella:

```sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(255) NOT NULL,
  prodotto VARCHAR(255) NOT NULL,
  quantità INT NOT NULL,
  data_ordine DATE NOT NULL
);
```

### 3. Configura il backend

```bash
cd backend
npm install
```

Aggiorna le credenziali del database nel file di configurazione (es. `db.js` o `.env`):

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ordini_magazzino
```

Avvia il server:

```bash
node index.js
```

Il backend sarà disponibile su `http://localhost:3000` (o sulla porta configurata).

### 4. Avvia il frontend

Apri il file `frontend/index.html` direttamente nel browser, oppure servi la cartella con un server locale (es. Live Server su VS Code).

## 🔌 API Endpoints

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/orders` | Restituisce tutti gli ordini |
| POST | `/orders` | Inserisce un nuovo ordine |

### Esempio body POST

```json
{
  "cliente": "Mario Rossi",
  "prodotto": "Laptop",
  "quantità": 2,
  "data_ordine": "2026-03-16"
}
```

## 👨‍💻 Autore

**Michelangelo Stega**  
Progetto sviluppato nell'ambito del percorso IFTS cofinanziato con risorse del Programma FSE+ 2021/2027 della Regione Emilia-Romagna.