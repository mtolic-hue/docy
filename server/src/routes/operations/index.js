import express from 'express'

import auth from 'wasp/core/auth'

import createTask from './createTask.js'
import updateTaskStatus from './updateTaskStatus.js'
import deleteCompletedTasks from './deleteCompletedTasks.js'
import createTag from './createTag.js'
import createChild from './createChild.js'
import createCheck from './createCheck.js'
import getTasks from './getTasks.js'
import getTags from './getTags.js'
import getChildren from './getChildren.js'
import getChild from './getChild.js'
import getChildChecks from './getChildChecks.js'

const router = express.Router()

router.post('/create-task', auth, createTask)
router.post('/update-task-status', auth, updateTaskStatus)
router.post('/delete-completed-tasks', auth, deleteCompletedTasks)
router.post('/create-tag', auth, createTag)
router.post('/create-child', auth, createChild)
router.post('/create-check', auth, createCheck)
router.post('/get-tasks', auth, getTasks)
router.post('/get-tags', auth, getTags)
router.post('/get-children', auth, getChildren)
router.post('/get-child', auth, getChild)
router.post('/get-child-checks', auth, getChildChecks)

export default router
