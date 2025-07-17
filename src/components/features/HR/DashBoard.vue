<template>
  <section>
    <div class="flex flex-wrap  gap-5">
      <CommonCard class="flex-1" v-for="i in 4" :key="i" />
    </div>
    <div></div>
    <CommonTable class="max-h-[65vh] mt-2">
      <template #thead>
        <tr>
          <th>Date</th>
          <th>Employee</th>
          <th>Role</th>
          <th>Employee Type</th>
          <th>Status</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Over Time</th>
        </tr>
      </template>
      <template #body>
        <tr v-for="staff in dataTable" :key="staff.name">
          <td>{{ staff.date }}</td>
          <td class="flex gap-x-2 items-center">
            <n-avatar round lazy size="large" :src="staff.img_url" />
            <p>{{ staff.name }}</p>
          </td>
          <td>{{ staff.role }}</td>
          <td>
            <BaseTag type="success" :content="staff.employmentType" />
          </td>
          <td>
            <BaseTag type="warning" :content="staff.status" />
          </td>
          <td>{{ staff.CheckIn }}</td>
          <td>{{ staff.CheckOut }}</td>
          <td>{{ staff.OT }}</td>
        </tr>
      </template>
    </CommonTable>
  </section>
</template>


<script setup lang="ts">
//base
import BaseTag from '@/components/base/BaseTag.vue'
import { readonly } from 'vue';

const dataTable = readonly([
  {
    date: '13/01',
    name: "M",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Manager",
    employmentType: "Full-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "0h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
  {
    date: '13/01',
    name: "O",
    img_url: "https://imgs.search.brave.com/o6mhC20JbqI0W0MjOqm3vs2oHQImgQBqdzEN7-iW-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNzIzNzU0/OC8xNTY1NC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE1NjU0MDU4/OC1zdG9jay1waG90/by1jcmlzdGlhbm8t/cm9uYWxkby1wb3J0/dWdhbC5qcGc",
    role: "HR Officer",
    employmentType: "Part-Time",
    status: "Present",
    CheckIn: "09:00 AM",
    CheckOut: "05:00 PM",
    OT: "1h"
  },
])
</script>
