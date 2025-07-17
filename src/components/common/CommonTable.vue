<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <slot name="body" />
      </tbody>
      <tfoot>
        <slot name="tfoot" />
      </tfoot>
    </table>
  </div>
</template>


<style >
.table-wrapper {
  overflow: auto;
    scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* iOS smooth scroll */
}
table{
  width: 100%;
  border-collapse: collapse;
}
thead {
  position: sticky;
  z-index: 10;
  top: 0;
  border-radius: 50px;
  background: var(--sidebar-color);
  font-size: 15px;
}
th {
  padding: 10px;
  text-align: start;
}
td {
  padding: 10px;
}

tbody > tr {
  border-bottom: 1px solid #ebeaea;
}
</style>
