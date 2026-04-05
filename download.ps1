$dir = "C:\ProgramData\CombinePS"
$exe = "$dir\app.exe"
$proto = "combineps"
$url = "https://github.com/phwyverysad/Scripts-PowerShell/blob/main/Scripts-PowerShell/app.exe"

New-Item -ItemType Directory -Force -Path $dir | Out-Null
Write-Host "กำลังดาวน์โหลดโปรแกรม..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $url -OutFile $exe

$regPath = "HKCU:\Software\Classes\$proto"
New-Item -Path $regPath -Force | Out-Null
New-ItemProperty -Path $regPath -Name "(Default)" -Value "URL:CombinePS Protocol" -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name "URL Protocol" -Value "" -PropertyType String -Force | Out-Null

$cmdPath = "$regPath\shell\open\command"
New-Item -Path $cmdPath -Force | Out-Null
Set-ItemProperty -Path $cmdPath -Name "(Default)" -Value "`"$exe`" `"%1`""

Write-Host "ติดตั้งสำเร็จ! ตอนนี้ปุ่มในหน้าเว็บของคุณพร้อมใช้งานแล้ว" -ForegroundColor Green
