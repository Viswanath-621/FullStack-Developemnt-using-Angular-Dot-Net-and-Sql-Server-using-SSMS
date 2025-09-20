# 🚀 FullStack-Developemnt-using-Angular-Dot-Net-and-Sql-Server-using-SSMS

How to Push a Local Project to GitHub (Beginner’s Guide)

This repository documents the step-by-step process of uploading a local project from your computer to GitHub for the first time.  
It’s designed for beginners and freshers who want a simple guide to get started with Git & GitHub.

## 📌 Steps to Push Your Project

1️⃣ Initialize Git in Your Project

git init

2️⃣ Configure Your Git Identity

git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"

git config --global --list

3️⃣ Stage and Commit Your Code

git add .
git commit -m "Initial commit"

4️⃣ Connect Your Local Project to GitHub

git remote add origin https://github.com/username/my-project.git

5️⃣ Sync with GitHub (If Repo Already Has Files like README)

git pull origin main --rebase

6️⃣ Push Your Code to GitHub

git push -u origin main

✅ Done!
Your local project is now successfully uploaded to GitHub 🎉
