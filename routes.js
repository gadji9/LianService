import VueRouter from 'vue-router'
import navbar from '/src/components/navigation'
import home from '/src/components/home'


const routes = [
    {
        path: '/',
        component: navbar,
        children: [
        {
          path: '',
          component: home
        }
      ]
    }
  ]
  const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
  })

  export default router;