<script setup>
import toTop from "@/UI/toTop.vue";
import {ref} from "vue"
toTop.scrollToTop =  true;

const content = `
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
//===============================================================================================//
必修: Prompt Engineering for Developers
Duration: 5 hours
Objective: This course focuses on prompt engineering, teaching participants how to interact with and
leverage ChatGPT for solving real-world problems. Participants will build custom chatbots, develop
summarization tools, and enhance their understanding of LLM-powered APIs.
Key Topics: Prompt design, API interaction, summarization, text transformation, and chatbot
development.
Recommended for: Developers, analysts, and engineers aiming to create AI-powered tools and
improve their prompt engineering skills.
Link to Course: <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank">
https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/
</a>
lin.thc@gmail.com
YjLQUh5_n38p$b9

必修: Functions, Tools, and Agents using LangChain
Duration: 5 hours
Objective: This course offers hands-on experience with LangChain, focusing on integrating LLMs with
tools and building agents that automate workflows. Learners will explore how to design applications that
use agents to interact with APIs and databases in real-world scenarios.
Key Topics: LangChain framework, LLM agents, workflow automation, and API integration.
Recommended for: Engineers and developers building dynamic AI-powered tools and automating
workflows.Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/">
Functions, Tools, and Agents using LangChain</a>

必修: LangChain for LLM Application Development
Duration: 10 hours
Objective: This course dives deep into LangChain's capabilities for building LLM-powered applications.
Learners will build practical projects, focusing on document retrieval, embeddings, and designing modular
components for AI applications.
Key Topics: Application design with LangChain, document retrieval, embeddings, and modular AI components.
Recommended for: Developers and engineers aiming to create scalable AI-powered applications using LLMs.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/">
LangChain for LLM Application Development</a><a  target="_blank" href="https://www.deeplearning.ai/courses/generative-ai-with-llms/">
 (DeepLearning.AI) 
 </a>

選修: AI Python for Beginning
Duration: 10 hours
Objective: This course introduces participants to Python programming essentials through practical, interactive
coding exercises. Learners will write code using Jupyter Notebooks and develop familiarity with common AI-related
programming concepts. The course also covers using chatbots to write and debug code.
Key Topics: Python basics, variables, functions, debugging, building LLM prompts, and working with chatbots for
automation.
Recommended for: Beginners in programming, data analysts, and engineers transitioning into AI roles.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/ai-python-for-beginners">
AI Python for Beginners </a><a  target="_blank" href="https://learn.deeplearning.ai/courses/ai-python-for-beginners/lesson/5/running-your-first-program">
(DeepLearning.AI - Learning Platform)</a>

選修: AI for Everyone
Duration: 15 hours
Objective: Provides a hands-on introduction to generative models and LLMs. Full-stack engineers will
learn to incorporate generative AI into their apps through APIs and web integration.
Key Topics: Building applications with GPT models, AI-enhanced workflows, and real-world case studies.
For people who are: Full-stack python engineers, data engineers, data analyst
Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/ai-for-everyone/">
https://www.deeplearning.ai/courses/ai-for-everyone/</a>

選修: Generative AI with LLMs
Duration: 20 hours
Objective: This course explores the practical application of generative AI using large language models
(LLMs). Participants will learn to deploy and fine-tune LLMs for business applications, covering
transformer architecture, optimization techniques, and inference tools.
Key Topics: Generative AI models, transformers, fine-tuning, scaling, and real-world deployment
scenarios.
Recommended for: Engineers and analysts seeking hands-on experience with generative models and AI
deployment strategies.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/generative-ai-with-llms">
Generative AI with LLMs (DeepLearning.AI)</a>


AI⼈才培訓線上課專題學規劃
---------------------------------
類別       優先序   主題                                                說明                            Duration
前導技術   選修     AI Python for Beginners                                                             10 hrs
AI基礎知識 選修     AI for Everyone                                                                     15 hrs
           選修    Generative AI for Everyone                         ⽣成式 AI⽂本⽣成和容建             20 hrs
           選修    Generative AI with LLMs                                                             20 hrs

LLM RAG   選修     Building LLM Applications with LangChain           LLMLLaMA、MistralLLM開發          15 hrs
技術      選修      Generative AI with Retrieval-Augmented Generation  檢索增強⽣成(RAG)提⾼型準確性的設計 20 hrs
          必修     Prompt Engineering for Developers                                                    5 hrs
          必修     Functions, Tools, and Agents using LangChain                                         5 hrs
          必修     LangChain for LLM Application Development                                            10 hrs
 
專題實作   必修     基於RAG的對話開發                                   使⽤Chat8855開發式碼(線下環境)     ⼀週
輔助⼯具    選⽤    沈式翻譯(影字翻中) https://immersivetranslate.com/zh-TW




    </pre>
  </div>
`

// color:#c1cccc; 
const colorOptions = ref({
  value: "rgba(193,204,204)",
  btn: true,
  theme: "light"
});
</script>

<template>
    <div>
    <!-- <v3-color-picker v-model:value="color"></v3-color-picker> -->
    <!-- <div class="demo" v-color="colorOptions" :style="{backgroundColor: colorOptions.value}"></div> -->
    <div class="demo" @click="(event) => colorEvent(event, colorOptions)" :style="{backgroundColor: colorOptions.value}"></div>
  </div>
  <div>WITS Collge 成就AI⼈才職涯</div>
  <!-- <div v-html="content"></div> -->
  <input v-model="colorOptions.value">
  <div v-html="content" :style="{ color: colorOptions.value }"></div>
  <toTop></toTop>
</template>

<style scoped lang="scss">
.demo {
  height: 50px;
  width: 50px;
}
</style>