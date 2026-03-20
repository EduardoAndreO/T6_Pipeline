# T6 Pipeline - CI/CD Project

[![CI Status](https://github.com/EduardoAndreO/T6_Pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/EduardoAndreO/T6_Pipeline/actions/workflows/ci.yml)

Proyecto Node.js con pipeline de integración continua completo usando GitHub Actions.

## Características Implementadas

- ✅ **Pruebas Unitarias**: Jest con cobertura >80%
- ✅ **Linting**: ESLint configurado
- ✅ **Matrix Strategy**: Pruebas en Node 18 y 20, en Ubuntu y Windows
- ✅ **Cache de Dependencias**: Aceleración de builds con `actions/setup-node`
- ✅ **Reporte de Cobertura**: Generado automáticamente en cada run

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm

## Instalación Local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/EduardoAndreO/T6_Pipeline.git
   cd T6_Pipeline
   2. Instala las dependencias:

   ```bash
   npm install
   ## Ejecución