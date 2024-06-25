'use server'

import fs from 'node:fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), '/public/data')

export async function getCoursesData() {
  const filePath = path.join(dataDirectory, 'courses.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

export async function getProjectsData() {
  const filePath = path.join(dataDirectory, 'projects.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

export async function getSkillsData() {
  const filePath = path.join(dataDirectory, 'skills.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}

export async function getIconsData() {
  const filePath = path.join(dataDirectory, 'icons.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return await fileContents
}
