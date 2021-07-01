# Angular Recipes

Тут описан сбор правил по стилю кода и архитектуре Angular для любого проекта.
Цель — описать минимум лучших практик для angular, соблюдая закон Парето 80/20.
Чтобы новый программист, без его обучения, писал "правильный" код и архитектуру.
Это освободит team lead от обучения, что облегчит ему производить "селекцию" персонала.
В конечном счете это нужно для соблюдения принципа - "Нормально делай, нормально будет".
Приветствуются предложения по улучшению данного гайда.

В данном гайде все рабочие. Пример из README можно найти в коде проекта.

Автор: Евгений Войтенко Почта: evoytenkoapps@gmail.com

# Поехали!

## Мокируем сервисы

Для того чтобы не зависеть от стороннего сервиса, например бекенда и получать от него любые данные какие мы хотим в
любой момент времени, мы сами мокируем получение данных от бекенда. Например HTTP сервисы.

1. Создаем базовый абстрактный класс`abstract class LoggerService`, описываем в нем нужные методы
2. Создаем нужный нам сервис `class MyLoggerService extends LoggerService `, наследуемся от базового и прописываем
   нужную реализацию.
3. Создаем `MyLoggerMockService` сервис, наследуемся от базового и прописываем нужную реализацию. В названии в начале
   ставил слово `Моск`. Файл называем по маске `*****-mock.service.ts`
4. Инжектируем базовый класс `LoggerService` в компоненты
5. Создаем провайдер `LoggerServiceProvider` в отдельном файле для каждого
   провайдера `export const LoggerServiceProvider: Provider = { provide: LoggerService, useValue: environment.isUseLogger ? new MyLoggerMockService() : new MyLoggerService(), };`
   . Прописываем в providers условия выбора Production или Mock, например`LoggerServiceProvider`. Используем `useClass`
   или `useFactory`
6. Вставляем провайдер в модуль `providers: [LoggerServiceProvider]`
7. provider храним в папке Providers данного модуля (где они используются)

## Файлы

Каждую сущность: класс, интерфейс, перечисление, record создаем в отдельном файле. В одном файле не должно быть два
интерфейса или перечисления См. `./src/app/common`

Для `interface` `ISimpleInterface` создаем файл с расширением `.interface.ts`

Для `model` `SimpleModel` создаем файл с расширением `.model.ts`

Для `dictionary (record)` создаем файл с расширением `.dictionary.ts`

Для `enum` `SimpleEnum` создаем файл с расширением `.enum.ts`

Для `class` `Simple` создаем файл с расширением `.ts`

## Интерфейсы

Интерфейсы, которые расширяют логику называем с буквы `I` `IAuthService`

Интерфейсы, которые описывают только данные называем просто `Environment`

Для `environment` описываем его интерфейс `Environment` и кладем его в папку `./environments`

Если интерфейс используется только для работы с одним компонентом, то не выносим его в отдельный файл.

Если интерфейс используется для работы разных компонентов, сервисов, то выносим его в отдельный файл.

## Форматирование

Код форматируем через prettier

В `./src` создаем файл под названием `.prettierrc.json`. В нем прописываем настройки форматирования. Применяем данный
файл в настройках своей IDE.

В `./src` создаем файл под названием `.prettierignore`. В указываем пути для которых не будет применяться
форматирование.

Настраиваем IDE так, чтобы при сохранении файла к нему применялось форматирование.

Перед каждым `git push` в репозиторий должно производиться форматирование проекта, чтобы code reviewer видел
отформатированный код, также оно будет производиться в самом репозитории при `merge`

## Зависимости

Устанавливаем зависимости по согласованию

Зависимости должны устанавливаться с возможностью обновления только `patch` версии. Для этого указываем символ `~` и
номер версии в `package.json`.

## Tslint

Ошибки в коде ищутся с помощью Tslint

Правила устанавливаются с помощью сторонних библиотек.

Подключаем библиотеку с правилами в `tslint.json` свойство `extends`

Правила прописываются в файле `tslint.json` свойство `rules`

Проверка правил запускается командой `ng lint --format prose` или см. `package.json`

Перед пушем в репозиторий делать проверку правил `Tslint` и решить их, если будут ошибки, то пуш не смержится по
правилам ci/cd.

Если аргумент функции, результат функции, свойство и т.д могу быть `null`, то указываем это явно,
например `userName | null`, иначе не указываем. Тем самым мы указываем контракт, по которому мы работаем.

Если в `@Input()` передается объект ( интерфейс или класс ), то указываем что он может быть `null` и задаем значение
в `null` чтобы не было ошибок при включенном `strict mode`. `@Input() data: SomeData | null = null`;

## CRLF LF

Чтобы на разных ОС windows, linux при команде `git add .` не было ошибок `warning: LF will be replaced by CRLF in`
создаем файл `.gitattributes` с правилом.

`* text=auto eol=lf`

## Type Script

Пишем максимально строгий код и явный код

Указываем модификаторы доступа на все члены и методы классов.

Используем строгий режим `"strict": true`

Указываем тип данных для каждого свойства, константы, аргумента функции, возвращаемое значение функции, аргумента
функции `rxjs` оператора исключение сложные операторы `combine` и тд.

По максимуму не используем проверку наличия/отсутствия свойства объектов с помощью `?`. Возможно только для
DTO. `private a?: number;`

Не используем `any` (возможно использование только при работе со сторонними библиотеке, если нет возможности).

Избегаем мутации объектов, все свойства классов, интерфейсов делаем `readonly`. Это поможет избежать мутации данных из
компонента потомка у родителя и на оборот, также поможет при работе со стратегий `OnPush`.

Помечай массивы не своих интерфейсов, если у его свойств не указан `readonly` как `Readonly<Ix>[]`
Плохой пример:
`functionsToAdd: IRequirementDTO[] = [];`
Хороший пример:
`functionsToAdd: Readonly<IRequirementDTO>[] = [];`

Не используем `var`, `let`, где возможно используем `const` по максимому

Всегда используем строгое равенство `===`

Если член класса точно будет проинициализирован, но при этом он не передается в конструкторе, `typescript` в строгом
режиме выдаст ошибку, то помечаем его символом `!`, если не известно будет оно или нет указываем `undefined`.
Пример:
Данные точно придут из `store` или `facade` по подписке в `ngOnInit`, указываем `private someData!: SomeData;`
Неизвестно придут данные или нет `private data: number | undefined`

Не используем названия свойств как строковое значение, т.к это нарушает принцип `DRY`. Вместо этого стараемся получить их как переменную из `Enum` или специальной функциии
Плохой пример:
`*ngIf="approveStatus['Deleted'] === 'deleted'"`
`this.router.navigate(['projects'])`
Хороший пример:
`*ngIf="status === approveStatus.Approved" public approveStatus: typeof ApproveStatus = ApproveStatus;`
`this.router.navigate([Routes.PROJECTS])`

## Общие алгоритмы

Избегаем `side effects`

Если функция с аргументом что-то меняет, то мы начинаем называть ее со слова `set`,
например `setSometing(data: SomeType): void`

Если функция без аргумента меняет что-то, то мы называем ее со слова `change` например `changeSometing(): void`

Если функция получает значение, то мы называем ее со слова `get`, неважно есть аргументы или нет.
Например `getSometing() : string`, `getSometing(data: SomeType) : string`

Пишите декларативный код с использованием функциональной парадигмы. Старайтесь чаще использовать функции `filter`, `map`
, `reduce`, `every`, `some`. В частности, если необходимо перебрать массив на предмет истинности определённого поля
объекта и при этом выполнить действие только в случае истинности, проще говоря, когда у нас есть `if`, но нет else, то
использование `find` строго необходимо. Код становится чище и читаемее.
Например для того чтобы изменить массив не нужно использовать `foreEach + includes` используйте `map + filter`

Плохой пример:

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

Хороший пример:

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

В стрелочных функциях указывайте название аргументов согласно логике. Называть аргументы читаемо, чтобы из их названия
было понятно какие данные там внутри, например `countersDTO` `maxDataField`. Не называть их не читаемо,
например: `c` `m`

Пример:
`if(arr.find( user: User => user.userName === 'Петрович' ))`

Все `boolean` значения называйте через `is....` или `has...`

Плохой пример:

```
public static searchResults(state: FdmSearchStateModel, showDeleted: boolean)
```

Хороший пример:

```
public static searchResults(state: FdmSearchStateModel, isShowDeleted: boolean)
```

Названия методов, свойств, классов и т.д не должны иметь двойные трактования. Например вместо `count` или `allItemsCount` стараемся использовать `totalFoundInSearch`, вместо `isEdit` -> `isShowDeleteAndCancel`

Не используйте более одного тернарного `?` оператора вместе. Вместо этого выносите подобные проверки в отдельную
функцию и используйте внутри нее различные подходы.
`if return`, `switch case`,`for of`, `for in`

Плохой пример:

```
return link.includes('groups')
      ? FDM_SEARCH_RESULT_GROUP.GROUPS
      : link.includes('domains')
      ? FDM_SEARCH_RESULT_GROUP.DOMAINS
      : link.includes('business-capabilities')
      ? FDM_SEARCH_RESULT_GROUP.BUSINESS_CAPABILITIES
      : link.includes('tech-capabilities')
      ? FDM_SEARCH_RESULT_GROUP.TECH_CAPABILITIES
      : FDM_SEARCH_RESULT_GROUP.GROUPS;
```

Хороший пример:

```
  private getNonEmptyResultGroupRoute(searchResults: FdmSearchResults): string {
    for (const resultGroup of Object.values(FDM_SEARCH_RESULT_GROUP)) {
      if (searchResults[resultGroup].length > 0) {
        return fdmSearchResultGroupRouteDictionary[resultGroup];
      }
    }
    return '';
  }
```

Не используйте выражения, более 70 символов в массивах, значениях объектов и т.д. Выносите их в отдельные константы и
используя их. С помощью назначения имен константам мы повышаем их понимание и читаемость кода, также такой код легче
дебажить.

Плохой пример:

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

Хороший пример:

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

Не используйте длинные выражения более 50 символов в логических операциях. Вместо этого выносите их в отдельные
переменные и потом применяйте их. Плохой пример:

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

Хороший пример:

```
    const isValueIsString: boolean = (typeof data.currentValue && typeof data.previousValue) === 'string';
    const valueLength: number = (data.currentValue ? data.currentValue : '').length;
    const isKeyNoTExist: boolean =
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

    if (isValueIsString && valueLength + data.previousValue.length > 0 && isKeyNoTExist)
```

Еще пример:

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

Вместо `Record` стараемся использовать интерфейс как ассоциативный массив, т.к в нем можно указать названия свойств, что
повысит читаемость кода. Плохо читаемый пример:

```
sectionsCounters: Record<number, SectionCounters>;
```

Хорошо читаемый пример:

```
sectionsCounters: { [classifierValueId: number]: SectionCounters }
```

В методе нужно использовать только одну вложенность фигурных скобок, иначе сделать череду `if(){}` с вложенностью 1 или разбивать метод на несколько методов.
см. https://www.youtube.com/watch?v=AkdEsCHt1cg&t=166s
Плохой пример:

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

Хороший пример:

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

Вместо `if else` нужно использовать `if return return`
Плохой пример:

```
    if (!isReleaseExists && !isCacheExists) {
      return new ReleaseDTO();
    } else {
      return drafts[key];
    }
```

Хороший пример:

```
    if (!isReleaseExists && !isCacheExists) {
      return new ReleaseDTO();
    }
    return drafts[key];
```

Придерживаемся закону `Деметры`

Соблюдаем закон `DRY`

Мутации:

1. Не делаем мутаций.
2. Не извинениям объекты из вложенных функций. Делаем это на уровне объекта. Если объект - является членом класса, то
   его желательно менять из первой вызываемой функции. Плохой пример:

```
const a = {....}
  f1() {
    f2(){
      f3() { a.property = true }
      }
    }
```

Хороший пример:

```
let a = {....}
const property: boolean =  f1() {
  return f2(){ }
    }
f2(){ return f3() }
f3(){ return true }
a = {...a, property }
```

## Angular

Используем стратегию `OnPush` у всех компонентов. Чтобы сделать это по умолчанию указываем это правило в `angular.json`

```
        "@schematics/angular:component": {
          "changeDetection": "OnPush"
        }
```

Большие компоненты, сервисы, шаблоны разбиваем на несколько поменьше, их легче тестировать приятней поддерживать. `Lada`
и `Merсedes-Benz` - обе машины, они едут и везут пассажира одинаково, но одна приятней, другая нет.

Стремимся до `75` строк кода в `html` шаблоне, иначе разбиваем его на несколько более маленьких (`smart` + `dumbs`)

Стремимся до `400` строк кода в компонентах, сервисах, директивах, классах иначе разбиваем их на несколько более
маленьких.

Не используем `Promise`, только `RxJS`.

Не наследуем компоненты между собой. Если нужно вынести общий в код, то используем: сервисы, директивы и т.д.

Используем функцию `trackBy` во всех `ngFor`. (см. `TrackByExampleComponent`)

Избегаем циклические зависимости.

Каждый компонент помещаем в свою папку, также добавляем путь к компоненту в общий для компонентов файл `index.ts`

Даем названия `Input`, `Model`, `Output` так, чтобы снаружи было понятно какую задачу они выполняют в месте объявления.

Плохой пример:

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

Хороший пример:

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

В дамб в названия `Input`, `Model`, `Output` не переносим бизнес логику смарта и наоборот. Плохой пример:

```
  [isDraftValid]="isDraftValid$ | async"
```

Хороший пример:

```
  [isSaveEnable]="isFormValid$ | async"
```

Придерживаемся следующего порядка объявлений свойств контроллера компонента:

```
view child (property)
input (property)
output (property)
selector (property)
disaptch (property)
public (property)
private (property)
constructor()
public (method)
private (method)
```

## Template

Атрибуты компонента, или тега указываем в следующем порядке:

1. все директивы
2. статичные атрибуты
3. inputs
4. outputs

Пример:

```
<app-component *ngIf="true" id="1" class="app-component"  [data]="data" (data)=setData($event)>
</app-component>
```

Для каждого компонента, где необходимо, стараемся создавать свою собственную модель. Мапить ее необходимо в компоненте выше, как на для Input, так и при получении из Output.
Например если у родителя объект с 5 свойствами, а потомку нужно только 4 свойства, то в потомке нужно создать собсвенный интерфейс с этими 4 полями и ждять его на вход. Преобразование 5 в 4 должен делать его родитель.
(parent m1 to m2) m2 -> child, child m2 -> (m2 to m1 parent)

## RxJs

В целях отписки, оператор `takeUntil(.....)` нужно ставить непосредственно рядом с `subscribe()`, ставить его выше не
безопасно.

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
      takeUntil(this.destroy$)
    ).subscribe();
```

В компоненте всегда делаем отпуску от `subscribe()`. Если в компоненте нет подписки с помощью `subscribe()`, то отписку
делать бессмысленно. Плохой пример:

```
    this.uneditable$ = this.api.getClassifiersTopShowOnGUI().pipe(
      map((response) => response.result),
      takeUntil(this.destroy$)
    );
```

Отписку делаем с помощью `takeUntil()` + ( `Subject` или `UnsubscribeService` )

Пример:

```
.pipe(
  .map(....)
  tap(.....),
  takeUntil(this.destroyer)
)
.subscribe(() => ....);
```

Не делаем подписки в конструкторе. Плохой пример:

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

Подписку `.subscribe(() => ....)` внутри другой подписки `.subscribe(() => subscribe())` делать нельзя. Если надо
получить данные из другого потока, то используем `switchMap` либо другие операторы высшего порядка. Плохой пример:

```
    // Первая подписка
    this.isModuleEditor$.pipe(takeUntil(this.destroy$)).subscribe((access) => {
        this.draftsService
          .getDrafts(DraftStatuses.Created, this.user.userId)
          .pipe(takeUntil(this.destroy$))
          // Подписка в подписке
          .subscribe((result) => {
            if (result) {
              this.containersService.pendingDraftState.next(result ? result : []);
            }
          });
    });
```

В целях избегания `side effects` стараемся не вызывать в потоке `subject.next`. Вместо использования `subject` выносим
общую часть потока в `pipe()` и используем ее. Далее расширяем общую часть операторами.
Например: `subjectAnalog$ = dataSourse$.pipe(....); otherData$ = subjectAnalog$.pipe(.....)`

В сервисах и компонентах разрешается делать присваивание или вызов других методов только в операторах `tap`
либо `subscribe`.

В компонентах желательно делать присваивание или вызов других методов в `subscribe` вместо `tap`, иначе мы получим не
явный `side effect`.

Плохой пример:

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

Правильный пример:

```
  this.rmsEntitiesService.rmsContoursState$ .pipe(
  filter (contours => !contours)),
  takeUntil(this.destroy$))
  .subscribe(() => this.getRmsContours()
  )
```

Если в методе нужно получить данные из другого потока, то не нужно создавать подписку в методе. Делаем так:

1. создаем `subject`
2. подписываемся на него в `ngOnInit`, прописываем в его `pipe()` нужный поток с помощью операторов высшего порядка,
   например `switchMap`.
3. в методе вызываем `subject.next()`
4. получаем данные в `subscribe()`, либо через ` | async`

Пример:

```
// Создаем потоки
const sub = new Subject();
const data$ = of(1);

// Подписываемся в
ngOnInit{
  sub.pipe(switchMap(_ => data$),takeUntil(this.destroy$)).subscribe(console.log);
}

// Вызываем в методе
public onClick(){
  this.sub.next();
}
```

Вместо `setTimeout()` лучше использовать `Subject.subscribe()` + оператор `delay`
Плохой пример:

```
  getClassifications() {
    setTimeout(() => {
        this.initFilters();
    }, 100);
  }
```

Не делаем подписки в методах, которые часто вызываются фреймворком, например `ngOnChanges`

Плохой пример:

```
  ngOnChanges(changes: SimpleChanges): void {
      this.projectsService
        .getProject()
        .pipe(takeUntil(this.unsubscribeService$))
        .subscribe();
  }
```

Не передавайте (Observable, Subject, etc...) как аргументы в функции и не полчайте результат работы даннх функций. Вместо этого вызывайте эти функции по цепочке, используя `pipe` + операторы
Плохой пример:
Тут мы получаем поток `itemsTypesWhereCountsIsGreaterThanZero` как результат функции, а затем передаем его как аргумент в другую функцию `_getFilterModelFromItemTypes`.
Вместо этого можно использовать их по цепочке

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

Этот пример лучше:

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

## Архитектура

Придерживаемся концепции `smart + dumbs components` (умный / глупый компоненты)

`smart` - умный.

1. Только он общается со сторонними сервисами, `store`, `facade` и т.д.
1. Диспатчит `actions`.
1. Содержит в себе бизнес логику.
1. Отвечает за роутинг.
1. Он не использует `Input\Output`.

`dumb` - глупый.

1. Показывает данные.
1. Передает данные только родителю.
1. Использует минимум логики внутри.
1. Не использовать в них сервисы.
1. Содержит логику обработки вложенных компонентов.
1. Не общается ни с какими сторонними сервисами.
1. Он использует `Input\Output`. Даем такие названия для `Input\Output`, чтобы они показывали что ни делают и это можно было понять без их просмотра.

В одном умном максимально вложено 5 глупых, например: `(smart(dumb1(dumb2(dumb3(dumb4(dumb5))))))`, при большем
количестве будет сложно поддерживать `Input, Output, @ViewChild()`

Передачу данных между `родитель - потомок ` делаем через `input + output`

Если родителю нужно послать в потомка событие или данные, в родителе используем `@ViewChild()` + вызов метода потомка.

Сущности разбиваем на три типа:

1. `DTO` - то что приходит, уходит на бэкенд `DataDTO`
2. `Entity` - то что хранится в store `Data`, используем его как `value object`, тоесть он должен быть без методов.
3. `Vm` - то что нужно для компонента. `VmData`

Для `Entity` не используем класс или интерфейс с методами, используем собственный интерфейс `Data` или интерфейс `IData` из `swagger`, при этом чтобы в них не было методов.

## Структура проекта

Делим проект на модули

Модуль называем по имени без префикса `_`, например `data`

Компоненты кладем в папку `_components` модуля, далее в `_smart` - умные компоненты и `_dumb` - глупые компоненты

Компоненты называем по имени, например `data` без префикса `_`

## Комментарии

Если есть бага или особенность, то это комментируем либо делаем TODO.

## CSS Стили

Стили компонента указываем в файле стилей компонента `*.component.scss`

Стили для "root" элемента компонента указываем в файле стилей, в псевдо-классе `host`

Придерживаемся методологии BEM

Пример:

```
   main-button
   main-button--primary
   main-button__label
   main-button__label--secondary
```

Для облегчения верстки у компонентов, в `*.css` выставляем по умолчанию `:host {display: block}`. Чтобы сделать это по умолчанию указываем это правило в `angular.json`

```
        "@schematics/angular:component": {
          "displayBlock": true
        }
```

**SVG**

Монохром:
Временно храним их в `assets`

Не монохром:

1. Без логики - храним в `assets`
2. С логикой - создаем отдельный компонент и храним код `svg` в нем

## NGXS

Сущности храним в папках:

`actions` = классы actions
`models` = классы стейтов и их дефолтные значения
`selectros` - классы селекторов
`states` = эффекты actions

Если нужно отслеживать статус какого-либо объекта в `store`, то мы оборачиваем его в `generic`:

```
export interface StoreStatusData<T> {
  data: T;
  status: StoreStatus;
}
```

При реализации `Action` воспроизводить все возможные случаи и смотреть как их отрабатывает проект.

Пример:

1. Нет данных,
2. Есть 1 объект,
3. Есть 1000 объектов
4. Ошибка
5. Есть 1 объект задержка 5 сек
6. Все основные комбинации связанных `Action`.

Если есть возможность делаем собственные селекторы для каждого `smart` компонента.

Не делаем общий селектор для нескольких `smart`, если эти смарты не влияют друг на друга по бизнес логике. Иначе можно
сделать единый селектор. Либо объединить несколько селекторов через операторы `merge` и т.д

Плохой пример:

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

Хороший пример:

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

Даем названия для `actions` так же как и для функций, начинаем с глагола. Плохой пример:

```
NewRelease
```

Хороший пример:

```
ResetSelectedRelease
```

В Store храним данные, только если они нужны после создания компонента, но были получены до его создания.
Если данные не храним в `store`, то для получения данных из эффектов используем `Actions` (как шину данных).
Пример:

```
ngOnInit(): void {
  this.actions$
    .pipe(
      ofActionSuccessful(GetSearchResultSuccess),
      takeUntil(this.unsubscribeService)
      )
    .subscribe((searchResult: { fullInfo: ScoredContentEntry[] }) => {
      this.searchResult = this.globalSearchService.getSearchResult(searchResult.fullInfo);
  });
}
```

```
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    this.store.dispatch(new LoadRelease(id));

    const loaded$: Observable<boolean> = this.actions$.pipe(
      ofActionDispatched(LoadReleaseLoaded),
      map(() => true)
    );

    const error$: Observable<boolean> = this.actions$.pipe(
      ofActionDispatched(LoadReleaseError),
      map(() => {
        this.redirectToErrorPage();
        return false;
      })
    );

    return merge(loaded$, error$).pipe(take(1));
  }

```

`moment` Показывается в `Redux dev tools` как строка.

## Formly

Внутри `expressionProperties` не возвращаем новые объекты, вместо этого берем их из аргументов, иначе Formly будет
бесконечно обновлять свою model и эмитить `valueChanges`.

Плохой пример:

```
  'templateOptions.datepickerOptions.min': (release: ReleaseDTO, releaseFormState: ReleaseFormState) => {
    return release.dateFrom ? release.dateFrom : new Date();
  },
```

Хороший пример:

```
  'templateOptions.datepickerOptions.min': (release: ReleaseDTO, releaseFormState: ReleaseFormState) => {
    return release.dateFrom ? release.dateFrom : releaseFormState.minDate;
  }
```
