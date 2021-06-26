@title Chargement --- ViB
@echo off
cls
call npm i
cls
@title ON --- M[ViB]
@echo off
:loop
node [ViB].js
timeout /t 3
goto loop