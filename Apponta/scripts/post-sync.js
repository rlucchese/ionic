const fs = require('fs');
const path = require('path');

// Caminho para o capacitor.build.gradle do módulo Android
const buildGradle = path.join(__dirname, '../android/app/capacitor.build.gradle');

if (fs.existsSync(buildGradle)) {
    let content = fs.readFileSync(buildGradle, 'utf8');

    // Corrige Java toolchain para 17
    content = content.replace(/VERSION_21/g, 'VERSION_17');

    // Corrige Kotlin jvmTarget para 17
    content = content.replace(/jvmTarget\s*=\s*["']21["']/g, 'jvmTarget = "17"');

    fs.writeFileSync(buildGradle, content);
    console.log('✅ Capacitor build.gradle atualizado: Java 17 e Kotlin jvmTarget 17');
} else {
    console.warn(`⚠️ Arquivo não encontrado: ${buildGradle}`);
}
