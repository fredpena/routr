/*
 * Copyright (C) 2023 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster
 *
 * This file is part of Routr.
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { HealthCheck as HC } from "@routr/common"
import { getConfig } from "./config/get_config"
import { getLogger } from "@fonoster/logger"
import { CONFIG_PATH } from "./envs"

const logger = getLogger({ service: "location", filePath: __filename })
const result = getConfig(CONFIG_PATH)

if (result._tag === "Right") {
  HC.check(result.right.bindAddr)
} else {
  logger.error(result.left)
}
