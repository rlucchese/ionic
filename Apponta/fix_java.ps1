# Caminho para o build.gradle do Capacitor
$buildFile = "../android/app/capacitor.build.gradle"

# Lê o arquivo, substitui Java 21 por Java 17, e grava de volta
(Get-Content $buildFile) -replace 'JavaVersion.VERSION_21', 'JavaVersion.VERSION_17' | Set-Content $buildFile

Write-Host "Java version fix applied: 21 → 17"
