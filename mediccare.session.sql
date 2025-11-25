CREATE DATABASE IF NOT EXISTS mediccare;
USE mediccare;

-- ===============================
-- TABELA: Administrador
-- ===============================
CREATE TABLE administrador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- ===============================
-- TABELA: Idoso
-- ===============================
CREATE TABLE idoso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    dataNascimento DATE NOT NULL,
    contatosEmergencia VARCHAR(255),
    administrador_id INT,
    FOREIGN KEY (administrador_id) REFERENCES administrador(id)
);

-- ===============================
-- TABELA: Doenca
-- ===============================
CREATE TABLE doenca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    dataDiagnostico DATE,
    medicoResponsavel VARCHAR(120),
    especialidade VARCHAR(100),
    observacoes TEXT,
    evolucao TEXT,
    idoso_id INT NOT NULL,
    FOREIGN KEY (idoso_id) REFERENCES idoso(id)
);

-- ===============================
-- TABELA: Medicamento
-- ===============================
CREATE TABLE medicamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    medicoPrescritor VARCHAR(120),
    especialidade VARCHAR(100),
    quantidadeInicial INT NOT NULL,
    horariosPrescritos VARCHAR(255),
    instrucoesEspeciais VARCHAR(255),
    classificacao VARCHAR(50),
    idoso_id INT NOT NULL,
    FOREIGN KEY (idoso_id) REFERENCES idoso(id)
);

-- ===============================
-- TABELA: Estoque
-- ===============================
CREATE TABLE estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantidadeInicial INT NOT NULL,
    quantidadeAtual INT NOT NULL,
    medicamento_id INT UNIQUE NOT NULL,
    FOREIGN KEY (medicamento_id) REFERENCES medicamento(id)
);

-- ===============================
-- TABELA: Administracao (registro de doses)
-- ===============================
CREATE TABLE administracao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    horarioAdministrado DATETIME NOT NULL,
    observacoes TEXT,
    tipo VARCHAR(50),
    medicamento_id INT NOT NULL,
    cuidador_id INT,
    FOREIGN KEY (medicamento_id) REFERENCES medicamento(id)
);

-- ===============================
-- TABELA: Evento Adverso
-- ===============================
CREATE TABLE eventoAdverso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100) NOT NULL,
    dataHora DATETIME NOT NULL,
    descricao TEXT,
    local VARCHAR(120),
    idoso_id INT NOT NULL,
    FOREIGN KEY (idoso_id) REFERENCES idoso(id)
);

-- ===============================
-- TABELA: Sinais Vitais
-- ===============================
CREATE TABLE sinalVital (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100) NOT NULL,
    valor VARCHAR(100) NOT NULL,
    dataHora DATETIME NOT NULL,
    observacoes TEXT,
    idoso_id INT NOT NULL,
    FOREIGN KEY (idoso_id) REFERENCES idoso(id)
);

-- ===============================
-- TABELA: Cuidador
-- ===============================
CREATE TABLE cuidador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    cpf VARCHAR(20),
    whatsapp VARCHAR(50),
    cancelamentos INT DEFAULT 0
);

-- ===============================
-- TABELA: Alertas
-- ===============================
CREATE TABLE alerta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100) NOT NULL,
    mensagem VARCHAR(255) NOT NULL,
    prioridade VARCHAR(50),
    criadoEm DATETIME DEFAULT CURRENT_TIMESTAMP,
    idoso_id INT,
    medicamento_id INT,
    FOREIGN KEY (idoso_id) REFERENCES idoso(id),
    FOREIGN KEY (medicamento_id) REFERENCES medicamento(id)
);

