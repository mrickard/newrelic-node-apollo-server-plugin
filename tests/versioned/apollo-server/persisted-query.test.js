/*
 * Copyright 2020 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

const { setupApolloServerTests } = require('./apollo-server-setup')
const persistedQueryTest = require('../persisted-query-tests')

setupApolloServerTests(persistedQueryTest)
