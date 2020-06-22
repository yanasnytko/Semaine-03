# Flexbox

## Introduction

Pour le moment on a vu que l'on a des éléments de type block et inline, on utilise float pour de la mise en page. On a également vu les tableaux mais ça ne sert pas à mettre un site en page, encore moins un site responsive. Vient alors à la rescousse: Flexbox!

Flexbox permet d'avoir du contenu qui s'adapte, qui est flexible, en fonction de la taille de la page et des containers.

## Comment ça fonctionne

Pour commencer il nous faut un flex container, ça sera le parent. Dedans on va placer nos éléments. On lui attribue ensuite la propriété **display:flex**. Tous les enfants deviendront du coup des éléments flexibles.

```html
<!-- index.html -->
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
/* style.css */
.flex-container{
display:flex;
}
```

[Voir en pratique](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox)

### Les propriétés du container

#### Flex-direction

Définis dans quel sens vont se positionner les éléments flexible à l'intérieur du container.

```css
.flex-container{
  display: flex;
  flex-direction: column; /* column-reverse, row, row-reverse */
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex-direction)

#### Flex-wrap

Définit si les éléments doivent allez à la ligne ou pas

```css
.flex-container{
  display: flex;
  flex-wrap: wrap; /* no-wrap, wrap-reverse */
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex-wrap)

#### Flex-flow

Permet juste de combiner le wrap et la direction

```css
.flex-container{
  display: flex;
  flex-flow: row wrap;
}
```

#### Justify-content

Permet d'aligner horizontalement les éléments à l'intérieur du container

```css
.flex-container{
  display: flex;
  justify-content: center; /* flex-start, flex-end, space-around, space-between  */
}
```

![justify-content](Images/justify-content.svg)

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#justify-content)

#### Align-items

Permet d'aligner verticalement les éléments à l'intérieur du container

```css
.flex-container{
  display: flex;
  align-items: center; /* flex-start, flex-end, stretch, baseline  */
}
```

![align-items](Images/align-items.svg)

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#align-items)

#### Align-content

Permet d'aligner les éléments à l'intérieur du container quand il y a plus d'une ligne d'élements

```css
.flex-container{
  display: flex;
  align-content: center; /* flex-start, flex-end, strech, space-between, space-around  */
}
```

![align-content](Images/align-content.svg)

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#align-items)


#### Centrer parfaitement

On utilise **justify-content** et **align-items** avec comme valeur **center**

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Les propriétés des enfants du container

#### Order

Permet de changer l'ordre des éléments. Par défaut les éléments apparaîtront dans l'ordre dans lequel ils sont écrits. On peut donner comme valeur n'importe quel chiffre et du coup l'ordre sera croissant. 

```html
<!-- index.html -->
<div class="flex-container">
  <div id="element1">1</div>
  <div style="order: 1">2</div>
  <div style="order: 2">3</div>
</div>
```

```css
/*styles.css */
#element1 {
  order: 3
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#order)

#### Flex-grow

Permet d'augmenter la taille d'un élément par rapport aux autres. Il suffit de mettre une valeur numérique.

```css
#element1{
  flex-grow: 2 /* Double la largeur */
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex-grow)

#### Flex-shrink

Permet de déterminer si un élément rétrécit par rapport aux autres. Il suffit de mettre une valeur numérique. La valeur par défaut est 1.

```css
#element1{
  flex-shrink: 0;
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex-shrink)

#### Flex-basis

Détermine la valeur initial de la longueur de l'élément.

```css
#element1{
  flex-basis: 200px;
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex-basis)

#### Flex

Permet de combiner **flex-grow**, **flex-shrink** et **flex-basis**

```css
#element1{
  flex: 0 0 200px;
}
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#flex)


#### Align-self

Permet de déterminer l'alignement d'un élément dans le container. Cette propriété surpasse l'alignement par défaut défini par **align-items**

```css
#element1{
  align-self: center; /* flex-start, flex-end
  }
```

[Voir en pratique](https://www.w3schools.com/css/css3_flexbox.asp#align-self)

## Allez on se détend avec un petit jeu

Essayez de compléter un max d'exercice sur ce petit jeu ça vous aidera a encore mieux visualiser les différentes propriétés liés à Flexbox.

[Flexbox Froggy](https://flexboxfroggy.com/#fr)

## Quelques liens utiles

[Build with Flexbox](http://flexbox.buildwithreact.com/)

[Complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


