---
title: "Projects: Cecil.Inject"
permalink: /:collection/:path/index.html
---

# Cecil.Inject

**Project page:** [GitHub](https://github.com/denikson/Mono.Cecil.Inject), [Documentation](http://denikson.github.io/Mono.Cecil.Inject/html/introduction.htm)

**License:** MIT

**Tools used**: [Mono.Cecil](https://github.com/jbevain/cecil)

**Programming languages used**: C#

### Description

This is a small extension library for Mono.Cecil. This library adds some very basic type traversing methods, like `GetMethod`. Moreover, Cecil.Inject allows to define simple method injections and perform them. More exactly, Cecil.Inject allows to perform the following basic tasks:

* Inject any method with a call to a `void` method
* Inject with various parameters (`this`, method's parameters by value or by reference, class' fields)
* Modify the return value of the original method and fully (or partially) supress the original method's execution
* Pass some constant values, like int or string tags

The library is well documented and is used in some minor projects.

### Possible issues

Over time, as my understanding of object oriented programing and experience designing with such paradigms extended, the following issues became more apparent:

#### The configuration of injections is flimsy

I originally mimicked the functionality of `System.Reflection` by adding a myriad of injection flags, which made injection definition as easy as ORing a bunch of values. However it later I learned that

* Some flags require specialised parameters passed to the injection definition
* Adding new flags required sometimes to change the signature of important methods
* Changing signatures breaks compatibility
* Adding new flags required to add more consistency checks and functionality into a single class

All that causes major backwards compatibility issues when updating the tall.
All in all, here's an important lesson to learn: **make configuration classes and COM instead of flags**, as the functionality is easier to implement to be modular. A specialised configuration classes and C# operator overloading would've done the job as well.


#### Parameters depend on flags

And most C# compilers don't use CIL's default value feature for methods. Darn.

An example by trial-and-mistake: if you make your tags of type `int`, but later want them to be something else (like `object` that can be a string, a float, or some other constant), you will break backward compatibility unless you create a full new overload for each new tag type.

To prevent this, refer to the previous issue.
