# Angular Best Practices

# Description

This `Readme` file and `./examples` folder  describe a collection of codestyle rules and architecture patterns for `Angular` for any project.
The goal is to describe the minimum of best practices for angular while adhering to the 80/20 Pareto law.
This guide is created for beginners in `Angular`.
So that a new programmer without their practice could write good code and make a good architecture.

This will free a team lead from explaining those things, which will make easier for them to change staff.
Ultimately, this is necessary to comply with the principle - "Do it normally, and it will be fine."
Suggestions for improving this guide are welcome.

All examples are working. Examples from the `README` can be found in the project code.

Before starting learning the project, there are two things to keep in mind:

1. There are "unimportant things" - these are approaches in the development of refactoring which doesn't take much time.
   For example, these include issues of naming folders, components, services, etc. It doesn't matter how exactly you'll call any files, and folders and etc, much more important is that you and your team should make it equally for all project.
2. There are "important things" - these are approaches in the development of which refactoring takes a lot of time, it is often easier to rewrite some logic than to refactor it. As a rule, these include issues of architecture, correct use of libraries and frameworks.

That's why you make "unimportant things" as you wish, but "important things" i suggest you do according to this manual .

Email: [evoytenkoapps@gmail.com](mailto:evoytenkoapps@gmail.com)

## Table of content

- [Files](#files)
- [Project structure](#project-structure)
- [Interfaces](#interfaces)
- [Formatting](#formatting)
- [Packages](#packages)
- [Lint](#Lint)
- [Git](#git)
- [TypeScript](#TypeScript)
- [JavaScript](#javascript)
- [Angular](#Angular)
  - [Services mocking](#services-mocking)
  - [Template](#Template)
- [RxJs](#RxJs)
- [Architecture](#Architecture)
- [Comments](#Comments)
- [Css styles](#css-styles)
- [State manager](#state-manager)
  - [NGXS](#ngxs)
- [Forms](#forms)
  - [Formly](#formly)

## Files

Try to store each class, interface, enum, record in different files. The file shouldn`t have more than one entity

For `interfaces` that describes methods we should create a file with ending `***.interface.ts` and name it `ISimple`

For `interfaces` that describes value object create a file with ending `***.ts` and name it like `Simple`

For `dictionary (record)` create a file with ending `***.dictionary.ts`

For `enum` `Simple` create a file with ending `***.enum.ts`

For `class` `Simple` create a file with ending `***.ts`

## Project structure

Split the project logic into the modules. Give them a name according to the business rules, without prefix `_`, fore example `user-info`

Group the folders inside module like this:

```
`_components` - components
    `_smart` - smart components
    `_dumb` - dumb components
`_providers` - providers
`_models` - models ( object value inetrfaces and classes )
`_pipes` - pipes
`_directives` - directives
`_guards` - guards
`_resolvers` - resolvers
`_store` - Redux ( ngxs example )
    `actions` = the models of actions
    `models` = the models of states and theris default values
    `states` =  the actions effects and their selectors
`_constants` - constants
`_services` - services
    `facade` - facade
    `api` - rest services
`user-info` - nested module
```

Give a name for nested modules by business logic.

`user-info`
`details`

Give a name for components modules by business logic without `_`

Mocks store inside production folders

For example: [project-folder-sturcture](https://github.com/evoytenkoapps/angular-best-practices/tree/master/examples/src/app/components/project-folder-sturcture)

```
├───user-info
│   │   user-info.module.ts
│   │
│   ├───user-software
│   ├───_components
│   │   ├───_dumb
│   │   │   └───user-info-details
│   │   │           user-info-details.component.css
│   │   │           user-info-details.component.html
│   │   │           user-info-details.component.spec.ts
│   │   │           user-info-details.component.ts
│   │   │
│   │   └───_smart
│   │       └───user-info
│   │               user-info.component.css
│   │               user-info.component.html
│   │               user-info.component.spec.ts
│   │               user-info.component.ts
│   │
│   ├───_constants
│   ├───_directives
│   ├───_guards
│   ├───_models
│   ├───_pipes
│   ├───_providers
│   │       uesr-http.provider.ts
│   │       user-info.provider.ts
│   │
│   ├───_resolvers
│   ├───_services
│   │   ├───api
│   │   │       user-http-mock.service.ts
│   │   │       user-http-prod.service.ts
│   │   │       user-http.service.ts
│   │   │
│   │   └───facade
│   │           user-ngxs.facade.ts
│   │           user.facade.ts
│   │
│   └───_store
│       ├───actions
│       ├───models
│       └───states
└───user-story
```

## Interfaces

For example for `environment` describe his interface `Environment` and store inside `./environments/models/environment.ts`

When interface uses only for one component, then we may store it inside component.

When interface uses for several component, then we should store it his owin file, like `./models/some-data`.

## Formatting

Use `prettier` for code formatting

Inside `./src` create a file and call it `.prettierrc.json`. Describe there all formatting settings as you wish. Probably your ide will offer you to apply them, so do it.

Inside `./src` create a file and call it `.prettierignore`. Describe there the paths for the files that you don't want to format

We configure the `IDE` so that formatting is applied to it on saving the file.

## Packages

Packages should be installed with opportunity to update the `patch` version. So you should set `~` before the package version in `package.json`, like `prettier": "~2.2.1`.
You may set it by default in `yarn` or `npm`.

## Lint

`Tslint` or `Eslint` should find code errors inside project for you. Use what the `Angular` version allows for you.

Install code check rules through third party packages, like `rxjs-tslint-rules`.

### Tslint

Add code check packages into `tslint.json`, property `extends`, like `"extends": ["tslint:recommended", "rxjs-tslint-rules"]`.
Then set what kind of rules you want to use. Add it inside property `rules`, like `"rxjs-no-unsafe-takeuntil": { "severity": "error" }`.

You may run code checking with command `ng lint --format prose`, and add it to `package.json`.

## Git

### CRLF LF

If you have git warning after use `git add .`, you may fix them inside file `.gitattributes`, add there a rule `* text=auto eol=lf`

## TypeScript

Use strict mode `"strict": true`

We specify access modifiers for all members and methods of classes.

We specify the data type for each property, constant, function argument, return value of a function, argument
functions `rxjs` operator exception complex operators` combine` and so on.

Try don't use optional setting operator `?`, like `private a?: number;`, because your code should be as strict as it is possible.

Don use type `any` ( possible use only when working with third-party libraries, if there is no possibility )

We avoid mutation of objects. To keep that you should add `readonly` modification to all properties of classes and interfaces. This will help avoid mutating data from
the child component of the parent and vice versa. Also, its help when working with `OnPush` strategies, because you'll should copy all objects for changes, and change their reference at the end.

Add `Readonly<X>` for any objects when you can't set `readonly` for his properties.

Wrong example:

```
requiremensDTO: IRequirementDTO[] = [];
const user = Readonly<User>
```

Nice example:

```
requiremensDTO: Readonly<IRequirementDTO>[] = [];
const user = Readonly<User>
```

Don't use `var`. Use `const` always, or `let` when you need to change reference.

Always use strict comparison `===`

When a class member will be not initialized inside constructor, for example value from `BehaviourSubject`, if strict mode is on `typescript`
will give an errors, then we mark it with the symbol `!`, otherwise we set `undefined` or` null`.

Example:

```
@Input() adress: string | undefined = undefined;

public userInfo!: UserInfo

ngOnInit(){
   this.userInfo$.pipe(takeUntil(this.destroy$)).subscribe(userInfo => this.userInfo = userInfo)
}
```

Don't call objects properties via string, because its break `DRY` principle.
Also don't usu routes like a sting, put them into `enum`, and use it.

Wrong code:

```
*ngIf="approveStatus['Deleted'] === 'deleted'"

this.router.navigate(['projects'])

[routerLink]="/auth"

```

Nice code:

```
*ngIf="status === approveStatus.Approved"
public approveStatus: typeof ApproveStatus = ApproveStatus;

this.router.navigate([Routes.PROJECTS])

[routerLink]="['/' + Routes.AUTH]"

```

Do not give the names of entities that begin with verbs, use nouns.

Wrong code:

```
export interface CreatePoTipInfoModel {
    header: string;
    message: string;
    }
```

Nice code:

```
export interface ProductOwnerTipInfoCreateModel {
    header: string;
    message: string;
    }
```

## JavaScript

Avoid `side effects`

If a function with an argument changes something, then we start calling it with the word `set`, like `setSometing(data: SomeType): void`

If a function without an argument changes something, then we call it from the word `change`, like `changeSometing(): void`

If a function gets a value, then we call it with the word `get`, whether there are arguments or not,
Examples

```
getSometing() : string
getSometing(data: SomeType) : string
```

Try to use array functions `filter`,` map`, `reduce`,` every`, `some` more often.
if you need to iterate over the array for the truth of a certain field
object and at the same time perform the action only if it is true, then
we use `find`. The code becomes cleaner and more readable.
For example, to change the array you do not need to use `foreEach + includes`, use` map + filter`

Wrong code:

```
  private getGroupTypes(filteredScoredContentEntries: ScoredContentEntry[]): GroupType[] {
    const groupTypes: GroupType[] = [];

    filteredScoredContentEntries.forEach((scoredContentEntry: ScoredContentEntry) => {
      const type: EntityResultItemType = this.getType(
        scoredContentEntry.contentEntry!.entityType as EntityType,
        scoredContentEntry.contentEntry!.entitySubType as number
      ) as EntityResultItemType;

      if (!groupTypes.includes(type.group)) {
        groupTypes.push(type.group);
      }
    });

    return groupTypes;
  }
```

Nice code:

```
  private getGroupTypes(filteredScoredContentEntries: ScoredContentEntry[]): GroupType[] {
    return filteredScoredContentEntries
      .map((scoredContentEntry: ScoredContentEntry) => {
        const type: EntityResultItemType = this.getType(
          scoredContentEntry.contentEntry!.entityType as EntityType,
          scoredContentEntry.contentEntry!.entitySubType as number
        );
        return type.group;
      })
      .filter((group, index, groups) => {
        return groups.indexOf(group) === index;
      });
  }
```

Wrong code:

```
    this.iterations = Object.keys(artifactNames).map(
      (key) => new ArtifactIteration(parseInt(key, 10), artifactNames[key as number])
    );
```

Nice code:

```
    this.iterations = Object.keys(artifactNames)
        .map((keyAsString) => parseInt(keyAsString, 10))
        .map((key) => new ArtifactIteration(key, artifactNames[key]));
```

Wrong code:

```
function getCurrentList(parentId: number, typeId: number): ArtifactType[] {
  let currentList = [];
  if (artifacts.allArtifacts.type.length > 0) {
    for (let artifactType of artifacts.allArtifacts.type) {
      if (artifactType.parentId === parentId) {
        currentList.push(artifactType);
      }
    }
  }
  currentList.sort((first, second) =>
    first.orderId < second.orderId ? -1 : 1
  );
  return currentList;
}
```

Nice code:

```
function getCurrentList(parentId: number, typeId: number): ArtifactType[] {
  return artifacts.allArtifacts.type
    .filter((artifactType) => artifactType.parentId === parentId)
    .sort((first, second) => (first.orderId < second.orderId ? -1 : 1));
}
```

Inside arrow functions, specify the name of the arguments according to logic, like `countersDTO`, ` maxDate`.
It would be clear to understand what they contain, for example . Don't call them unreadable, like `c`,`m`

Wrong code:
`if(arr.find( u => u.userName === 'Петрович' ))`

Nice code:
`if(users.find( user: User => user.userName === 'Петрович' ))`

All booleans values start to call with `is` or `has`

Wrong code:

```
showDeleted: boolean
```

Nice code:

```
isShowDeleted: boolean
```

Try don't give the simple names ( double interpretation ) to methods, properties, classes that makes specific things. For example, instead of `count` or` allItemsCount`, we try to use `totalFoundInSearch`, instead of` isEdit` -> `isShowDeleteAndCancel`

Don't use more than one ternary operator`?` at once. Instead, check it inside `if() {return} return`.
Wrong code:

```
return link.includes('groups')
      ? FDM_SEARCH_RESULT_GROUP.GROUPS
      : link.includes('domains')
      ? FDM_SEARCH_RESULT_GROUP.DOMAINS
      : link.includes('business-capabilities')
      ? FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES
      : FDM_SEARCH_RESULT_GROUP.GROUPS;
```

Nice code:

```
 if(link.includes('groups'))
    return FDM_SEARCH_RESULT_GROUP.GROUPS
 if(link.includes('domains'))
    return FDM_SEARCH_RESULT_GROUP.DOMAINS
 if(link.includes('business-capabilities'))
    return FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES
 return FDM_SEARCH_RESULT_GROUP.GROUPS
```

Don't use expressions over than 70 characters in arrays, object values, if() etc. Move them into separate constants or functions. When we assign expressions to constants, we increase their understanding and readability, and such code is much more easier to debug.

Wrong code:

```
    return {
      [FDM_SEARCH_RESULT_GROUP.GROUPS]: state.searchResults[FDM_SEARCH_RESULT_GROUP.GROUPS].filter(
        (domain) => domain.status !== DomainDTOStatus.Deleted
      ),
      [FDM_SEARCH_RESULT_GROUP.DOMAINS]: state.searchResults[FDM_SEARCH_RESULT_GROUP.DOMAINS].filter(
        (domain) => domain.status !== DomainDTOStatus.Deleted
      ),
      [FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES]: state.searchResults[
        FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES
      ].filter((capability) => capability.status !== CapabilityDTOStatus.Deleted),
      [FDM_SEARCH_RESULT_GROUP.TECH_CAPABILITIES]: state.searchResults[
        FDM_SEARCH_RESULT_GROUP.TECH_CAPABILITIES
      ].filter((capability) => capability.status !== CapabilityDTOStatus.Deleted),
    } as FdmSearchResults;
```

Nice code:

```
    const groups: DomainDTO[] = state.searchResults[FDM_SEARCH_RESULT_GROUP.GROUPS];
    const deletedDGroups: DomainDTO[] = groups.filter((domain) => domain.status !== DomainDTOStatus.Deleted);

    const domains: DomainDTO[] = state.searchResults[FDM_SEARCH_RESULT_GROUP.DOMAINS];
    const deletedDDomains: DomainDTO[] = domains.filter((domain) => domain.status !== DomainDTOStatus.Deleted);

    const businessCapabilities: CapabilityDTO[] = state.searchResults[FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES];
    const deletedBusinessCapabilities: CapabilityDTO[] = businessCapabilities.filter(
      (capability) => capability.status !== CapabilityDTOStatus.Deleted
    );

    const techCapabilities: CapabilityDTO[] = state.searchResults[FDM_SEARCH_RESULT_GROUP.TECH_CAPABILITIES];
    const deletedTechCapabilities: CapabilityDTO[] = techCapabilities.filter(
      (capability) => capability.status !== CapabilityDTOStatus.Deleted
    );

    return {
      [FDM_SEARCH_RESULT_GROUP.GROUPS]: deletedDGroups,
      [FDM_SEARCH_RESULT_GROUP.DOMAINS]: deletedDDomains,
      [FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES]: deletedBusinessCapabilities,
      [FDM_SEARCH_RESULT_GROUP.TECH_CAPABILITIES]: deletedTechCapabilities,
    } as FdmSearchResults;
```

Wrong code:

```
    if (
      (typeof data.currentValue && typeof data.previousValue) === 'string' &&
      (data.currentValue ? data.currentValue : '').length + data.previousValue.length > 0 &&
      data.key !== 'owner' &&
      data.key !== 'creationDate' &&
      data.key !== 'lastChangeDate' &&
      data.key !== 'type' &&
      data.key !== 'incomingLinksData' &&
      data.key !== 'status' &&
      data.key !== 'licensesData' &&
      data.key !== 'licenses' &&
      data.key !== 'tools' &&
      data.key !== 'toolsData'
    )
```

Nice code:

```
    const isValueIsString: boolean = (typeof data.currentValue && typeof data.previousValue) === 'string';
    const currentValue: number = data.currentValue ? data.currentValue.length : 0
    const isLengthNotZero: number = currentValue + data.previousValue.length > 0
    const isKeyNotExist: boolean =
      data.key !== 'owner' &&
      data.key !== 'creationDate' &&
      data.key !== 'lastChangeDate' &&
      data.key !== 'type' &&
      data.key !== 'incomingLinksData' &&
      data.key !== 'status' &&
      data.key !== 'licensesData' &&
      data.key !== 'licenses' &&
      data.key !== 'tools' &&
      data.key !== 'toolsData';

    if (isValueIsString && isLengthNotZero && isKeyNotExist)
```

Nice code:

```
 private filterList<T extends DomainDTO | CapabilityDTO>(list: T[], filters: FdmSearchFilters): T[] {
    return list.filter((entity): boolean => {
      const isCodeFound: boolean = !!entity.code?.toLowerCase().includes(filters.search.toLowerCase());
      const isNameFound: boolean = !!entity.name?.toLowerCase().includes(filters.search.toLowerCase());
      const isOwnerEqual: boolean = entity.owner === filters.owner?.rmsId;
      if (filters.search && filters.owner) {
        return (isCodeFound || isNameFound) && isOwnerEqual;
      }
      if (filters.owner) {
        return isOwnerEqual;
      }
      if (filters.search) {
        return isCodeFound || isNameFound;
      }
      return false;
    });
```

Instead of `Record`, we try to use the interface as an associative array, because you can specify the names of properties in it, which
will increase the readability of the code.

Wrong code:

```
sectionsCounters: Record<number, SectionCounters>;
```

Nice code:

```
sectionsCounters: { [classifierValueId: number]: SectionCounters }
```

Inside the method, you need to use only one nesting of curly braces, otherwise make an alternate of `if () {}` with nesting 1 or split the method into several methods.
look here https://www.youtube.com/watch?v=AkdEsCHt1cg&t=166s
Wrong code:

```
  @Action(AlertifyError)
  public alertifyError({}: StateContext<AlertifyStateModel>, { error }: AlertifyError): void {
    let message: string;
    if (error instanceof Error) {
    if (error instanceof ApiException) {
      if (error.response) {
        try {
          const parsedApiErrorResponse: { Message?: string } = JSON.parse(error.response);
          if (parsedApiErrorResponse && parsedApiErrorResponse.Message) {
            message = parsedApiErrorResponse.Message;
          } else {
            message = error.message;
          }
        } catch (_parseApiErrorResponseError) {
          message = error.message;
        }
      } else {
        message = error.message;
      }
    } else if (error instanceof Error) {
      message = error.message;
    } else {
      message = error;
    }
```

Nice code:

```
  @Action(AlertifyError)
  public alertifyError({}: StateContext<AlertifyStateModel>, { error }: AlertifyError): void {
    const message: string = this.getErrorMessage(error);
    AlertifyService.error(message);
  }

    private getErrorMessage(error: ApiException | Error | string): string {
    if (error instanceof ApiException) {
      return this.getApiErrorMessage(error);
    }
    if (error instanceof Error) {
      return error.message;
    }
    return error;
  }

    private getApiErrorMessage(error: ApiException): string {
    const parsedApiErrorMessage = this.tryParseApiErrorMessage(error.response);
    if (parsedApiErrorMessage !== null) {
      return parsedApiErrorMessage;
    }
    return error.message;
  }

    private tryParseApiErrorMessage(response: string): string | null {
    try {
      const parsedApiErrorResponse: { Message?: string } = JSON.parse(response);
      if (parsedApiErrorResponse && parsedApiErrorResponse.Message) {
        return parsedApiErrorResponse.Message;
      }
    } catch (_parseApiErrorResponseError) {}
    return null;
  }

```

Instead of `if else`, use `if return return`
Wrong code:

```
    if (!isReleaseExists && !isCacheExists) {
      return new ReleaseDTO();
    } else {
      return drafts[key];
    }
```

Nice code:

```
    if (!isReleaseExists && !isCacheExists) {
      return new ReleaseDTO();
    }
    return drafts[key];
```

We adhere to the law of `Demeter`. In other words, when accessing an object, a service, we use only one dot notation, like `someObject.someProperty`

We comply with the `DRY` law. In other words, do not use the same text, expression, piece of code twice. We move them into constants, `Enum`, `Class`, `function` etc ...

Mutations:

1. We don't make mutations inside components, it may cause problems with `onPush` strategy.
2. We do not change references to object`s properties from nested functions. Try to do that where object initialized. If the object is a member of the class, then
   it is desirable to change it inside called function.

Wrong code:

```
const a = {....}
  f1() {
    f2(){
      f3() { a.property = true }
      }
    }
```

Nice code:

```
  let a = {....}
  const property: boolean = f1();
  a = {...a, aSomeFiled: property }

  f1() { return f2(); }
  f2(){ return f3(); }
  f3(){ return true }

```

## Angular

We use the `OnPush` strategy for all components by default. To do this by default, we specify this rule in `angular.json`

```
        "@schematics/angular:component": {
          "changeDetection": "OnPush"
        }
```

Follow by `the single responsobility principle` we split large components, services, templates into several smaller ones, they are easier to test and more pleasant to maintain.
We strive for `75` lines of code in the` html` template, otherwise we split it into several smaller ones (`smart` +` dumbs`).
We strive to `400` lines of code in components, services, directives, otherwise we break them down into several more
small.

We don't use `Promise`, only`RxJS`, because:

1. It is problematic to unsubscribe from `async / await`, since you need to constantly figure out the cancellation token. And in rxjs it's straight out of the box, everything is thought out.
2. It is easy to organize `timeout` / `retreat` using rxjs.
3. To start a request declaratively, using pipe ` | async`, without using lifecycle.
4. To make a request dependent on some state (filtering, pagination, search)

We do not inherit components from each other. If you need to bring the general into the code, then we use: services, directives, parent class etc.

We use the `trackBy` function for all` ngFor`. (see. `TrackByExampleComponent`)

We avoid cyclical dependencies of entities (services, classes). If they arise, and essence A depends on B, and B depends on A, then we aggregate them inside essence C (A, B). And after all we use C.

We give the names `Input`, `Output` so that it is clear from the outside which one they were performing.

Wrong code:

```
      <sol-release-details-actions
        [editMode]="isEdit"
        [canEdit]="true"
        [canDelete]="false"
        [canSave]="true"
        [canCancel]="true"
        [isDraftValid]="isDraftValid$ | async"
        (cancel)="onCancel()"
        (save)="onCreate()"
      ></sol-release-details-actions>
```

Nice code:

```
      <sol-release-details-actions
        [isShowEditAndDelete]="!isEdit"
        [isShowEdit]="true"
        [isShowDelete]="false"
        [isShowSave]="true"
        [isShowCancel]="true"
        [isSaveEnable]="isFormValid"
        (cancel)="onCancel()"
        (save)="onCreate()"
        (edit)="onEdit(release)"
      ></sol-release-details-actions>
```

For `dumb's` ` Input`, `Model`,` Output` names, we do not transfer the business logic from smart and vice versa.

Wrong code:

```
  [isDraftValid]="isDraftValid$ | async"
```

Nice code:

```
<app-dumb>
  [isSaveEnable]="isDraftValid$ | async"
</app-dumb>
```

Follow this order of declarations for component controller properties:

```
viewchild / viewchildren
input
output
(property) public
(property) private
constructor()
get
set
(method) public
(method) private
```

When creating the objects, we use the `OOP` approach. Since `Angular` is designed for OOP.
Therefore, we do not create objects through a function, but we make classes.
Wrong code:

```
  public licenseMock = (license?: Partial<ILicenseDTO>): ILicenseDTO => {
    const mock: ILicenseDTO = {
      id: license?.id || this.randomService.id(this.mockDataSyncService.licenseMap.ids),
      name: license?.name || this.randomService.title(),
      description: license?.description || this.randomService.description()
    };
    return mock;
  };
```

Nice code:

```
  public licenseMock = new LicenseMock(license?: Partial<ILicenseDTO>);
```

Do not use abbreviations in the names of the components, give the full name.

Wrong code:
`PoStepsCreateComponent`

Nice code:
`ProductOwnerStepsCreateComponent`

Don't name the components with verbs, start the name with the business entity.

Wrong code:
`CreateStepsComponent`

Nice code:
`StepsComponentCreate`

Do not assign names to properties that begin with verbs, let's start with nouns, or `is`.

Wrong code:

```
    @Input() createPoTipInfo: ProductOwnerTipInfoModel = {
        header: '',
        message: '',
    };
```

Nice code:

```
    @Input() productOwnerTipInfo: ProductOwnerTipInfoModel = {
        header: '',
        message: '',
    };
```

If the function's argument, function's result, class's property, etc. can be `null` or` undefined`, then we indicate it explicitly. Indicate what you expect or don't expect to receive, return `null` or`unefined (void)`.

Wrong code:

```
@Input() userName: string;
....
if(this.userName){
    .....
}
```

Nice code:

```
@Input() userName: string | null = null
....
if(this.userName){
    .....
}
```

If you need to track `@Input ()` changes, for example, run some logic, then you can use `setter` for this. It is not recommended using `OnChanges` for this, because by default it does not support type checking and this can lead to errors after input refactoring. But if you may have a `glitch` effect, it is better to use` ngOnChanges`, and you should definitely wrap `SimpleChanges` in` Generic`. For an example of a wrapper, see [input-changes-detection] (https://github.com/evoytenkoapps/angular-best-practices/tree/master/examples/src/app/components/input-changes-detection)

Wrong code:

```
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes.userName?.currentValue;
    if(name){
        console.log('name inside changes was changed', name);
        this.userName = name;
    }
  }
```

Nice code:

```
  @Input()
  set userName(name: string | null) {
    console.log('name inside input was changed', name);
    if (name) {
      this.firstName = name;
    }
  }

  public firstName: string = '';
```

Let's give for `Input` and `Output` such names so that from the outside you can understand what kind of work they are doing. As a result, it should be clear without looking at them.

When you need to update or init data of any `ui` element, for example `mat-table`, you have to keep in mind, that this `ui` element creates after calling `ngAfterViewInit` life hook.
So to update its data you need to:

1. Store data inside parent component controller, inside `@Input()` , `subscription` or etc
2. Check is `ui` exist, then update its data
3. Set `ui` data inside `ngAfterViewInit`

Wrong example:

```
  @Input() set methods(methods: IMethodDTO) {
       this._methods = methods;

       this.setParametersDataSource(this._methods.parameters);
  }
```

Good example:

```
  @Input() set methods(methods: IMethodDTO) {
       this._methods = methods;

       if(this.tableParametrs){
          this.setParametersDataSource(this._methods.parameters);
        }
  }

  public ngAfterViewInit(): void {
      if(this.this._methods){
          this.setParametersDataSource(this._methods.parameters);
        }
  }

```

### Services mocking

In order not to depend on a third-party service, for example a backend, and receive any data during development, we should mock the receipt of data. For example if programmer want to get an error from backend, and check it on ui, he could mock some http.service and throw an exeption there.
To do this, you need to do the following:

1. Create a base abstract class `abstract class DataService`, describe the necessary methods in it.
2. We create the service `class DataHttpService extends DataService`, inherit from the abstract and write
   the desired implementation, for example put there real requests to backend.
3. Create a `class DataHttpMockService extends DataService` service, inherit from the abstract one and write the required implementation. The file is named by the mask `*****-mock.service.ts`
4. Injecting the abstract class `DataService` into the components or to other services.
5. We create the provider `DataServiceProvider` in a separate file. We write the contents of the provider like `export const DATA_SERVICE_PROVIDER: Provider = { provide: DataService, useValue: environment.isUseMock? new DataHttpMockService(): new DataHttpService ()}; `. We register the conditions for choosing `real` or` mock` in the providers. Using `useClass`
   or `useFactory`.
6. Insert the provider into the module `providers: [DATA_SERVICE_PROVIDER]`
7. We store `provider` in the` Providers` folder of this module.
8. We store the `Mock` in the same folder as the implementation.
9. It is preferable to inject abstractions over real implementations. Because passing the implementation can violate the Dependency Inversion Principle.

### Template

Specify the attributes of a template's tag in the following order:

1. directives
2. static attributes
3. css classes
4. inputs
5. outputs

Example:

```
<app-component *ngIf="true" id="1" class="app-component"  [data]="data" (data)=setData($event)>
</app-component>
```

For each component, where necessary, we try to create our own model. It is necessary to map it in the component above, both for `Input` and when receiving from `Output`.
For example, if the parent has an object with 5 properties, and the child needs only 4 properties, then in the child you need to create a custom interface with these 4 fields and wait for it to enter. Back conversion from 4 to 5 must be done by its parent.
(parent m1 to m2) m2 -> child, child m2 -> parent (parent m2 to m1 )

## RxJs

Always unsubscribe from the `subscription`.

Wrong code:

```
    this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result)
    ).subscribe();
```

Nice code:

```
    this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
      takeUntil(this.destroy$)
    ).subscribe();;
```

We do unsubscribe using `takeUntil()` and `Subject` or `UnsubscribeService` for unsubscribe.

Example:

```
const destroy$: Subject<void> = new Subject();

.pipe(
  .map(....)
  takeUntil(this.destroy$)
)
.subscribe(() => ....);

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
```

In order to unsubscribe, the operator `takeUntil (.....)` should be placed directly next to `subscribe()`, it should not be placed above.

Wrong code:

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
      takeUntil(this.destroy$)
    ).subscribe();
```

Nice code:

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      takeUntil(this.destroy$)
      map((response) => response.result)
    ).subscribe();
```

If the component does not subscribe using `subscribe()`, then to do unsubscribe is pointless.

Wrong code:

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
      takeUntil(this.destroy$)
    );
```

Nice code:

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
    );
```

Не делаем подписки в конструкторе, вместо этого делаем их в `OnInit` или `AfterViewInit` по ситуации.

Wrong code:

```
  constructor(
    private supportService: SupportService,
    private unsubscribeService$: UnsubscribeService
  ) {
    this.supportService.commonSupportAvailableState$.pipe(takeUntil(this.unsubscribeService$)).subscribe((state) => {
      this.isCommonSupportAvailable = state;
    });
  }
```

Пример лучше:

```
  ngOnInit(){
    this.supportService.commonSupportAvailableState$.pipe(takeUntil(this.unsubscribeService$)).subscribe((state) => {
      this.isCommonSupportAvailable = state;
    });
  }
```

Don't make `.subscribe (() => ....)` inside another subscription, like `.subscribe (() => subscribe ())`. If you needed
to get data from another stream inside subscription, then you should use `switchMap` or other rxjs higher-order operators.

Wrong code:

```
    this.isModuleEditor$.pipe(takeUntil(this.destroy$))
        // First subscription
        .subscribe((access) => {
                this.draftsService
                  .getDrafts(DraftStatuses.Created, this.user.userId)
                  .pipe(takeUntil(this.destroy$))
                  // Second subscription
                  .subscribe((result) => {
                    if (result) {
                      this.containersService.pendingDraftState.next(result ? result : []);
                    }
                  });
    });
```

Nice code:

```
    this.isModuleEditor$.pipe(
            switchMap(access => this.draftsService.getDrafts(DraftStatuses.Created, this.user.userId)),
            takeUntil(this.destroy$)
        )
          // Single subscription
          .subscribe((result) => {
            if (result) {
              this.containersService.pendingDraftState.next(result ? result : []);
            }
         });
```

To avoid `side effects`, we try not to call` subject.next()` inside the stream. Instead of using `subject`, put out
the common part of the stream in a `pipe ()` and use it. Next, we expand the general part of the operator.

Wrong code:

```
dataSource$.pipe(....
                tap(data=> this.someSubject.next(data))
                );
```

Nice code:

```
const someSubjectAnalogStream$ = dataSource$.pipe(....);
const otherStream$ = someSubjectAnalogStream$.pipe(.....) `
```

Inside rxjs streams you may to make assignments or call other methods only in the `tap` operator or `subscribe`.

In components, if you don't use ` | async` pipe, it is desirable to make an assignment or call other methods (side effect) in `subscribe` instead of` tap`. Otherwise use `tap`.

Wrong code:

```
  this.rmsEntitiesService.rmsContoursState$ .pipe(
    tap((contours) => {
      if (!contours) {
        this.getRmsContours();
      }
    }),
  takeUntil(this.destroy$)
  ).subscribe()
```

Nice code:

```
  this.rmsEntitiesService.rmsContoursState$ .pipe(
  filter (contours => !contours)),
  takeUntil(this.destroy$))
  .subscribe(() => this.getRmsContours()
  )
```

If the method needs to receive data from another stream, then you do not need to create a subscription in the method. We do this:

1. Create `subject`
2. We subscribe to him in any angular lifecycle method like `ngOnInit`, write the required stream in its` pipe ()` and using higher-order operators,
   for example `switchMap`.
3. Call `subject.next ()` in the method
4. Get the data in `subscribe ()`, or through `| async`

Example:

```
// Create a subject
const sub: Subject<number> = new Subject();
// Initialize main stream
const data$: Observable<number> = of(1);

// Make a subscription
ngOnInit{
  sub.pipe(switchMap(_ => data$),takeUntil(this.destroy$)).subscribe(console.log);
}

// Emit the subject inside method
public onClick(): void {
  this.sub.next();
}
```

Instead of `setTimeout ()` it is better to use `Subject.subscribe ()` and rxjs operator `delay`.

Wrong code:

```
  getClassifications() {
    setTimeout(() => {
        this.initFilters();
    }, 100);
  }
```

Nice code:

```
    ngOnInit{
        this.subject.pipe(delay(100),takeUntil(this.destroy$)).subscribe(()=> this.initFilters();)
    }

  public getClassifications(): void {
        this.subject.next();
  }
```

We do not make subscriptions in methods that are often called by the framework, for example `ngOnChanges`

Wrong code:

```
  ngOnChanges(changes: SimpleChanges): void {
      this.projectsService
        .getProject()
        .pipe(takeUntil(this.unsubscribeService$))
        .subscribe();
  }
```

Do not pass (Observable, Subject, etc ...) as arguments to the function and do not get the result of these functions. Instead, call these functions via chaining, using the `pipe operators`.

Wrong code:
Here we get the stream `itemsTypesWhereCountsIsGreaterThanZero` as the result of the function, and then pass it as an argument to another function` _getFilterModelFromItemTypes`.
Instead, you can chain them

```
  public getFilterModel(searchText: string): Observable<FilterModel> {
  .......
      const itemsTypesWhereCountsIsGreaterThanZero: Observable<
        ItemType[]
      > = this._getItemsTypesWhereCountsIsGreaterThanZero(allItemsTypesWithCounts);

      const filterModel: Observable<FilterModel> = this._getFilterModelFromItemTypes(
        itemsTypesWhereCountsIsGreaterThanZero
      );

      return filterModel;
    });
  }

  private _getItemsTypesWhereCountsIsGreaterThanZero(
    allItemsTypesWithCounts: Observable<ItemTypeWithTotalCount>[]
  ): Observable<ItemType[]> {
    return forkJoin(allItemsTypesWithCounts).pipe(
      map((itemsTypeWithCount: ItemTypeWithTotalCount[]) => .....
      )
    );
  }

    private _getFilterModelFromItemTypes(itemsTypesWhereCountsIsGreaterThanZero: Observable<ItemType[]>
  ): Observable<FilterModel> {
    return itemsTypesWhereCountsIsGreaterThanZero.pipe(
      map((itemsTypesWithCount: ItemType[]) => {
        ....
      })
    );
  }
```

Nice code:

```
  public getFilterModel(searchText: string): Observable<FilterModel> {
   .......
   return this._getItemsTypesWhereCountsIsGreaterThanZero(allItemsTypesWithCounts).pipe(
        switchMap((itemsTypesWhereCountsIsGreaterThanZero) => this._getFilterModelFromItemTypes( itemsTypesWhereCountsIsGreaterThanZero))
    )
    });
  }

  private _getItemsTypesWhereCountsIsGreaterThanZero(
    allItemsTypesWithCounts: Observable<ItemTypeWithTotalCount>[]
  ): Observable<ItemType[]> {
    return forkJoin(allItemsTypesWithCounts).pipe(
      map((itemsTypeWithCount: ItemTypeWithTotalCount[]) => .....
      )
    );
  }

    private _getFilterModelFromItemTypes(itemsTypesWhereCountsIsGreaterThanZero: Observable<ItemType[]>
  ): Observable<FilterModel> {
    return itemsTypesWhereCountsIsGreaterThanZero.pipe(
      map((itemsTypesWithCount: ItemType[]) => {
        ....
      })
    );
  }
```

## Architecture

Encapsulate components followed by the concept of `smart/dumbs components` see. [smart-dumb-concept](https://github.com/evoytenkoapps/angular-best-practices/tree/master/examples/src/app/components/smart-dumb-concept)

`smart`:

1. Communicates with services, for example `facade`, etc.
1. Contains business logic.
1. Responsible for routing.
1. Does not use `Input / Output`.
1. Can show data.
1. Contains the logic for processing nested components.

`dumb`:

1. Shows data.
1. Gets and sends data only to the parent or his children's.
1. Does not use any services.
1. Contains the logic for processing nested components.
1. Uses `Input \ Output`.

One smart may have only 5 nested `dumbs`, for example: `smart (dumb1 (dumb2 (dumb3 (dumb4 (dumb5)))))`, with more
it will be difficult to maintain `Input, Output, @ViewChild()`

We do data transfer between `parent - child` via` input + output`

If the parent needs to send an event or data to the child, then you should do this:

1. Create `abstract class`, for example like `TransferData`, and determine there methods.
1. Extends child component from `abstract class` and implement him.
1. Inside the parent we use `@ViewChild ('someid') transferData : TransferData `, and call abstract class methods.

Entities are sortred into three types:

1. `DTO` - what comes or goes to the backend, like `DataDTO`
2. `Model` - what is described our bussiness logic, like `DdataModel`, we use it as a`value object`, it must be without methods.
3. `Vm` - what is needed for the component, like `VmData`

Do not name the `dumb` properties of the component by business logic. Try to give them abstract names according to the `dumb` logic.

Wrong code:

```
    @Output() removeComponent: EventEmitter<void> = new EventEmitter<void>();
```

Nice code:

```
    @Output() deleteBtnChange: EventEmitter<void> = new EventEmitter<void>();
```

Followed by `dependency inversion` principle you should avoid direct injection your redux store, http-services inside each other or inside components.
So I offer to you to make an abstractions for each, like:

1. abstraction for state managers.
1. abstraction for any http or websocket services.
1. abstraction for any local or session storages services.
1. abstraction for any web worker services.

Also, you should store your domain model objects inside `app` module, fore example `/app/_models` or `/app/_core/_models`, and map backend's `dtos` into model inside `http.service` or etc.
Thus, you'll follow `dependency inversion` principle.

## Comments

If there is a bug in the code or a feature that, unfortunately, cannot be understood from the code, then we comment on it, or make a `TODO`.
In other cases, you do not need to write comments, you need to try to give unambiguous names for entities and functions for understanding.
Avoid double interpretations. To end up with self-documenting code. The code itself should read like a good book about your logic.
Alos comments should tell you why author choose that decision

Wrong code:

```
// Passing null to the tree
if (!moduleObject && !apiInterfaceObject && this.slCheckTreeService) {
  this.slCheckTreeService.selectNode(null);
}
```

Nice code:

```
// Remove selected items from the tree when nothing is selected
if (!moduleObject && !apiInterfaceObject && this.slCheckTreeService) {
  this.slCheckTreeService.selectNode(null);
}

// There is a nuance of ngxs, because it works outside the zone, the dialogue will not close. Need to call dialog in zone see https://github.com/ngxs/store/issues/1401#issuecomment-545180014
this.ngZone.run(() => {
  this.dialog.open(ConfirmationModalComponent, {
    panelClass: 'custom-dialog-container',
    data: infoData,
  });
});
```

## CSS styles

Specify component styles in the component styles file, like `*.component.css` or `*.component.scss`

When you needs to set up style for component's "root" tag, for example components inside `<router-outlet>` you may use pseudo class `:host` inside your `*.component.css` or `*.component.scss`

If you choose BEM as css guide, then you css classes should looks like that:

Example:

```
   main-button
   main-button--primary
   main-button__label
   main-button__label--secondary
```

**SVG**
Svg icons without logic we store inside `assets/icons`
Svg icons without logic we put into separate component

## State manager

If there is less than 10 `Business Models` that you have to store, then you may use services.
Otherwise, my advice for you is to use any state manager.
Also, if you are beginner as frontend engineer, then state manager its nice solution for you.
It doesn't matter which exactly state manager you will choose.

If we need to track the status of an object inside the store, then we wrap it in to `Generic`:

```
export enum StatusData {
  PENDING = 'PENDING',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  CANCEL = 'CANCEL',
}

export interface DataWithStatus<T> {
  readonly data: T;
  readonly status: StatusData;
}
```

And use like this:

```
export interface OpportunityModelStateModel {
  functionsAndSoft: DataWithStatus<FileToSave | null>;
}
```

Make all interaction with the `Store` through an abstract class, followed by `dipendency inversion` principle, we call it like ` ***. Facade.ts`, for example `UserInfoFacade` `user-info.facade.ts`.

1. Let's provide the facade at the module level.
2. Inject an abstract class into the component.
3. At the result component or service with business logic, should not have any imports from `state manager` library.

Give abstract names to the facade's methods, do not repeat names from yours current state manager.
For example, you can take the verbs like `create, read, update, delete, set, change, update, load` + `business model`.

Wrong code:

```
public abstract selectStatus(): Observable<StoreStatus>;
public abstract ofActionGetFormDataFromLocalStorageSuccessDispatched(): Observable<ICreatePOStepsModel>;
```

Nice code:

```
public abstract getStatus(): Observable<StoreStatus>;
public abstract loadedStepsFromLocalStorage(): Observable<ICreatePOStepsModel>;
```

### NGXS

Example [redux-store-ngxs](https://github.com/evoytenkoapps/angular-best-practices/tree/master/examples/src/app/redux-store-ngxs)

We store the entities in these folders:

`actions` = classes actions
`models` = state interfaces, classes and their default values
`States` = action effects and selectors

We do not make a one selector for several `smart`, if these smarts do not affect each other according to business logic. Otherwise, you can
make a single selector for each. Or, combine multiple selectors via `merge` operators, etc.

Wrong code:

```
    @Selector()
  public static active(state: ReleaseDetailsStateModel) {
    const { initial, drafts } = state;
    const key = `${initial?.id ?? NEW_KEY}`;
    const isReleaseExists = !!initial && initial.id > 0;
    const isCacheExists = drafts.hasOwnProperty(key);
    console.log('isReleaseExists', isReleaseExists, 'isCacheExists', isCacheExists);
    if (!isReleaseExists && !isCacheExists) {
      return new ReleaseDTO();
    } else if (!isReleaseExists && isCacheExists) {
      return drafts[key];
    } else if (isReleaseExists && !isCacheExists) {
      return initial;
    } else {
      return drafts[key];
    }
  }
```

Nice code:

```
  @Selector()
  public static getSelectedRelease(state: ReleaseDetailsStateModel): ReleaseDTO | null {
    const { drafts } = state;
    const selected: ReleaseDTO | null = state.initial;
    const draft: ReleaseDTO | null = selected ? drafts[selected.id] : null;
    return draft ? draft : selected;
  }

  @Selector()
  public static getNewReleaseDraft(state: ReleaseDetailsStateModel): ReleaseDTO | null {
    return state.drafts[ReleaseDetailsState.NEW_RELEASE_ID];
  }

    @Selector()
  public static isSelectedReleaseCached(state: ReleaseDetailsStateModel): boolean {
    const selected: ReleaseDTO | null = state.initial;
    return selected ? !!state.drafts[selected.id] : false;
  }
```

Name `actions` as you would for a functions, starting with a verb. Wrong code:

```
NewRelease
```

Nice code:

```
ResetSelectedRelease
LoadLinks
LoadLinksCancel
```

Inside `Redux dev tools` `moment` objects looks like a string, so be carefully during state inspection.

By default, `ngxs` works outside` ngZone`, so if you need to show dialogs, or other `ui` components from` action`, you may to do it inside `ngZone` explicitly.

Wrong code:

```
  @Action(AuthorizeError)
  public authorizeError({ setState, dispatch }: StateContext<AuthStateModel>, { error }: AuthorizeError): void {
         this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'custom-dialog-container'
    }
  }
```

Nice code:

```
  @Action(AuthorizeError)
  public authorizeError({ setState, dispatch }: StateContext<AuthStateModel>, { error }: AuthorizeError): void {
     this.ngZone.run(() => {
        this.dialog.open(ConfirmationModalComponent, {
        panelClass: 'custom-dialog-container'
      });
    });
  }
```

## Forms

If you do not need to change the entire `model` inside forms, then we should create a custom interface, we may call it like `Vm****`. To do this you may create it, or pick it from another.

Example:

```
export interface VmReleaseFormModel
  extends Pick<
    Release,
    'name' | 'position' | 'description' | 'rmsReleaseId' | 'businessUnitId' | 'dateFrom' | 'dateTo' | 'installDate'
  > {}
```

### Formly

We set the model via `setter` with mandatory checking for` null` and cloning, because `formly` mutates the object at runtime, if the model arrives from the` store`, then there will be an error. Since `store` usually freezes its models

```
  @Input() set model(model: VmReleaseFormModel) {
    if (model) {
      this._model = { ...model };
    }
  }
```

Be sure to declare the default model and initialize it. Otherwise, the form will emit a model with one property the first time, which will lead to errors.

Be sure to set the values of the shape keys from the model using the special function, like `public static getFieldName = <T> (name: keyof T) => name;`. 
We do this in order to rigidly synchronize the key-model bunch, otherwise formly will add incomprehensible properties to the model, and this will got to the store.

Example:

```
    this.fields = [
      {
        key: Utils.getFieldName<VmReleaseFormModel>('name'),
        type: 'input',
        className: 'col-6',
      ]
```

We emit the model only from `modelchange`, because it works only if the user changes the model himself or changes the options.
`ValueChange` is triggered more often than `modelchange`, so it will hinder us.
Ideally, the model should be issued only if the user changes something by hand.

Before emit model, clone it using `spread` or special libraries like `lodash`

Example:

```
  public onModelChange(model: ReleaseFormModel) {
    this.fdReleaseFormModelChange.emit({ data: { ...model }, status: this.formGroup.status as FORM_STATUS });
  }
```

When you change the options of the form, `modelchange` will be will work. To avoid this, we make such a thing:

```
  @Input() set isFormEnable(isEdit: boolean) {
    this._isFormEnable = isEdit;
    this.changeFormEnable(isEdit);
  }

  private changeFormEnable(isEnable: boolean): void {
    this.options.formState.disabled = !isEnable;
    const disableOptions = {
      onlySelf: true,
      emitEvent: false,
    };
    if (isEnable) {
      this.formGroup.enable(disableOptions);
      return;
    }
    this.formGroup.disable(disableOptions);
  }
```

It is necessarily to set your own interface for the form options, we should use types`typescript` + `strict mode`

Example:

```
interface ReleaseFormOptions extends FormlyFormOptions {
  formState: ReleaseFormState;
}

interface ReleaseFormState {
  disabled: boolean;
  minDate: moment.Moment;
}
  ......

 public options: ReleaseFormOptions = {
    formState: {
      disabled: true,
      minDate: moment(),
    },
  };
  .......
  expressionProperties: {
    'templateOptions.disabled': 'formState.disabled',
    'templateOptions.datepickerOptions.min': (release: ReleaseFormModel, releaseFormState: ReleaseFormState) => {
      return release.dateFrom ? release.dateFrom : releaseFormState.minDate;
    },
  },
```

We initialize the options, otherwise, when they are set for the first time, the `onModelChange` of the form will be triggered

We do not return new objects inside `expressionProperties`, instead we take them from the arguments, otherwise Formly will be
update your model endlessly and emit `valueChanges`.

Wrong code:

```
  'templateOptions.datepickerOptions.min': (release: ReleaseDTO, releaseFormState: ReleaseFormState) => {
    return release.dateFrom ? release.dateFrom : new Date();
  },
```

Nice code:

```
  'templateOptions.datepickerOptions.min': (release: ReleaseDTO, releaseFormState: ReleaseFormState) => {
    return release.dateFrom ? release.dateFrom : releaseFormState.minDate;
  }
```
