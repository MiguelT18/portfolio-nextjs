'use server'

import fs from 'node:fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), '/public/data')

// 👇 Get courses data 👇
export async function getCoursesData() {
  const filePath = path.join(dataDirectory, 'courses.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

// 👇 Get projects data 👇
export async function getProjectsData() {
  const filePath = path.join(dataDirectory, 'projects.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

// 👇 Get skills data 👇
export async function getSkillsData() {
  const filePath = path.join(dataDirectory, 'skills.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

// 👇 Get icons data 👇
export async function getIconsData() {
  const filePath = path.join(dataDirectory, 'icons.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}
