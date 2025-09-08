# 📘 Guide TypeScript

Ce projet couvre les **bases et concepts avancés de TypeScript**. Il est conçu pour aider les développeurs à comprendre et à utiliser TypeScript efficacement, que ce soit pour du développement front-end, du back-end ou la manipulation du DOM.

---

## 📌 Contenu

1. [Types de base](#-types-de-base)
2. [Interfaces, Classes et Fonctions](#-interfaces-classes-et-fonctions)
3. [Travailler avec le DOM et TypeScript](#-travailler-avec-le-dom-et-typescript)
4. [Types génériques](#-types-génériques)
5. [Namespaces](#-namespaces)
6. [Fusion de déclarations](#-fusion-de-d%C3%A9clarations)
7. [Utilisation d’un namespace externe](#-utilisation-dun-namespace-externe)
8. [Typage nominal de base](#-typage-nominal-de-base)

---

## 🧩 Types de base

TypeScript fournit des types de base pour renforcer la sécurité et la lisibilité du code :

* `string`
* `number`
* `boolean`
* `any`
* `void`
* `null` et `undefined`
* `tuple` et `enum`

Exemple :

```ts
let nom: string = "Alice";
let age: number = 25;
let actif: boolean = true;
```

---

## 🏗 Interfaces, Classes et Fonctions

* **Interfaces** : définissent la forme d’un objet.
* **Classes** : encapsulent données et méthodes.
* **Fonctions typées** : sécurisent les paramètres et le retour.

Exemple :

```ts
interface Person {
  name: string;
  age: number;
}

class User implements Person {
  constructor(public name: string, public age: number) {}
}

function greet(user: Person): string {
  return `Bonjour ${user.name}`;
}
```

---

## 🌐 Travailler avec le DOM et TypeScript

TypeScript permet de manipuler le DOM tout en gardant la sécurité des types :

```ts
const button = document.querySelector<HTMLButtonElement>('#myButton');
button?.addEventListener('click', () => {
  console.log('Bouton cliqué !');
});
```

---

## 🎯 Types génériques

Les **types génériques** rendent les fonctions et classes réutilisables :

```ts
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<number>(42);
```

---

## 📦 Namespaces

Les **namespaces** permettent d’organiser le code en modules internes :

```ts
namespace Utils {
  export function log(msg: string) {
    console.log(msg);
  }
}

Utils.log("Hello TypeScript");
```

---

## 🔗 Fusion de déclarations

TypeScript permet de **fusionner plusieurs déclarations** d’un même nom pour étendre des interfaces ou des namespaces :

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: "Alice", age: 25 };
```

---

## 🌍 Utilisation d’un namespace externe

Pour utiliser des bibliothèques externes avec un **namespace ambient**, on peut déclarer :

```ts
declare namespace MyLib {
  function doSomething(): void;
}

MyLib.doSomething();
```

---

## 🏷 Typage nominal de base

TypeScript n’a pas de typage nominal par défaut, mais on peut simuler un **typage nominal** pour éviter des confusions :

```ts
type UserId = string & { readonly __brand: unique symbol };

const id: UserId = "123" as UserId;
```

---

## 📚 Ressources

* [Documentation TypeScript](https://www.typescriptlang.org/docs/)
* [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
* [MDN Web Docs - TypeScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---

💡 **Astuce** : TypeScript fonctionne très bien avec les projets JavaScript existants et permet de migrer progressivement le code en toute sécurité.
